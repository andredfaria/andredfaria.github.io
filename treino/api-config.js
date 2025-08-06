/**
 * Configurações de API para integração com serviços de exercícios
 * Este arquivo centraliza todas as configurações para facilitar a manutenção
 */

// Configurações das APIs de exercícios
const API_CONFIG = {
    // MuscleWiki API (exemplo - necessário verificar documentação oficial)
    muscleWiki: {
        baseUrl: 'https://musclewiki.com/api',
        endpoints: {
            exercise: '/exercises',
            muscle: '/muscles',
            equipment: '/equipment'
        },
        imageBase: 'https://musclewiki.com/media/uploads/',
        videoBase: 'https://musclewiki.com/media/uploads/videos/',
        enabled: false // Ativar quando tiver acesso à API real
    },
    
    // ExRx.net API (exemplo - necessário verificar documentação oficial)
    exrx: {
        baseUrl: 'https://exrx.net/api',
        endpoints: {
            exercise: '/exercise',
            muscle: '/muscle',
            categories: '/categories'
        },
        enabled: false // Ativar quando tiver acesso à API real
    },
    
    // API local/fallback para desenvolvimento
    fallback: {
        enabled: true,
        imageService: 'https://via.placeholder.com', // Placeholder para desenvolvimento
        defaultImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkV4ZXJjw61jaW88L3RleHQ+PC9zdmc+'
    }
};

// Cache para otimizar requisições
const API_CACHE = {
    exercises: new Map(),
    images: new Map(),
    videos: new Map(),
    
    // TTL em milissegundos (1 hora)
    TTL: 60 * 60 * 1000,
    
    set(key, data) {
        this[key.split('.')[0]].set(key, {
            data,
            timestamp: Date.now()
        });
    },
    
    get(key) {
        const cache = this[key.split('.')[0]];
        const entry = cache.get(key);
        
        if (!entry) return null;
        
        // Verifica se o cache expirou
        if (Date.now() - entry.timestamp > this.TTL) {
            cache.delete(key);
            return null;
        }
        
        return entry.data;
    },
    
    clear() {
        this.exercises.clear();
        this.images.clear();
        this.videos.clear();
    }
};

/**
 * Serviço para buscar dados de exercícios
 */
class ExerciseAPIService {
    constructor() {
        this.config = API_CONFIG;
        this.cache = API_CACHE;
    }
    
    /**
     * Busca informações detalhadas de um exercício
     * @param {string} exerciseName - Nome do exercício
     * @param {string} muscleGroup - Grupo muscular
     * @returns {Promise<Object>} Dados do exercício
     */
    async getExerciseDetails(exerciseName, muscleGroup) {
        const cacheKey = `exercises.${muscleGroup}.${exerciseName}`;
        const cached = this.cache.get(cacheKey);
        
        if (cached) {
            return cached;
        }
        
        try {
            let exerciseData = null;
            
            // Tenta buscar na MuscleWiki primeiro
            if (this.config.muscleWiki.enabled) {
                exerciseData = await this.fetchFromMuscleWiki(exerciseName, muscleGroup);
            }
            
            // Se não encontrar, tenta ExRx
            if (!exerciseData && this.config.exrx.enabled) {
                exerciseData = await this.fetchFromExRx(exerciseName, muscleGroup);
            }
            
            // Se ainda não encontrar, usa dados locais
            if (!exerciseData) {
                exerciseData = this.getFallbackData(exerciseName, muscleGroup);
            }
            
            // Cache o resultado
            this.cache.set(cacheKey, exerciseData);
            
            return exerciseData;
            
        } catch (error) {
            console.error('Erro ao buscar dados do exercício:', error);
            return this.getFallbackData(exerciseName, muscleGroup);
        }
    }
    
    /**
     * Busca dados na API da MuscleWiki
     */
    async fetchFromMuscleWiki(exerciseName, muscleGroup) {
        if (!this.config.muscleWiki.enabled) return null;
        
        try {
            const response = await fetch(
                `${this.config.muscleWiki.baseUrl}${this.config.muscleWiki.endpoints.exercise}?name=${encodeURIComponent(exerciseName)}&muscle=${muscleGroup}`
            );
            
            if (!response.ok) throw new Error('Erro na API MuscleWiki');
            
            const data = await response.json();
            
            return this.normalizeMuscleWikiData(data);
            
        } catch (error) {
            console.error('Erro MuscleWiki API:', error);
            return null;
        }
    }
    
    /**
     * Busca dados na API da ExRx
     */
    async fetchFromExRx(exerciseName, muscleGroup) {
        if (!this.config.exrx.enabled) return null;
        
        try {
            const response = await fetch(
                `${this.config.exrx.baseUrl}${this.config.exrx.endpoints.exercise}/${encodeURIComponent(exerciseName)}`
            );
            
            if (!response.ok) throw new Error('Erro na API ExRx');
            
            const data = await response.json();
            
            return this.normalizeExRxData(data);
            
        } catch (error) {
            console.error('Erro ExRx API:', error);
            return null;
        }
    }
    
    /**
     * Normaliza dados da MuscleWiki para o formato padrão
     */
    normalizeMuscleWikiData(data) {
        return {
            name: data.name,
            image: `${this.config.muscleWiki.imageBase}${data.image}`,
            video: data.video ? `${this.config.muscleWiki.videoBase}${data.video}` : null,
            targetMuscles: data.muscles || [],
            equipment: data.equipment || 'Não especificado',
            difficulty: data.difficulty || 'Intermediário',
            instructions: data.instructions || [],
            tips: data.tips || 'Mantenha a forma correta durante todo o exercício.',
            source: 'MuscleWiki'
        };
    }
    
    /**
     * Normaliza dados da ExRx para o formato padrão
     */
    normalizeExRxData(data) {
        return {
            name: data.name,
            image: data.image_url,
            video: data.video_url,
            targetMuscles: data.target_muscles || [],
            equipment: data.equipment || 'Não especificado',
            difficulty: data.level || 'Intermediário',
            instructions: data.instructions || [],
            tips: data.tips || 'Mantenha a forma correta durante todo o exercício.',
            source: 'ExRx'
        };
    }
    
    /**
     * Retorna dados de fallback quando APIs não estão disponíveis
     */
    getFallbackData(exerciseName, muscleGroup) {
        // Verifica se existe no banco de dados local
        const localExercise = this.findLocalExercise(exerciseName, muscleGroup);
        
        if (localExercise && typeof localExercise === 'object') {
            return {
                ...localExercise,
                source: 'Local'
            };
        }
        
        // Gera dados básicos
        return {
            name: exerciseName,
            image: this.generateFallbackImage(exerciseName, muscleGroup),
            video: null,
            targetMuscles: [muscleGroup],
            equipment: 'Equipamento padrão',
            difficulty: 'Intermediário',
            instructions: [
                'Posicione-se corretamente para o exercício',
                'Execute o movimento de forma controlada',
                'Mantenha a respiração adequada',
                'Retorne à posição inicial'
            ],
            tips: 'Consulte um profissional para orientações específicas sobre a execução correta.',
            source: 'Fallback'
        };
    }
    
    /**
     * Busca exercício no banco de dados local
     */
    findLocalExercise(exerciseName, muscleGroup) {
        if (!window.exerciseDatabase || !window.exerciseDatabase[muscleGroup]) {
            return null;
        }
        
        return window.exerciseDatabase[muscleGroup].exercises.find(ex => 
            (typeof ex === 'string' ? ex : ex.name) === exerciseName
        );
    }
    
    /**
     * Gera imagem de fallback
     */
    generateFallbackImage(exerciseName, muscleGroup) {
        if (this.config.fallback.imageService === 'https://via.placeholder.com') {
            return `https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=${encodeURIComponent(exerciseName)}`;
        }
        
        return this.config.fallback.defaultImage;
    }
    
    /**
     * Limpa o cache
     */
    clearCache() {
        this.cache.clear();
    }
    
    /**
     * Atualiza configuração de uma API
     */
    updateAPIConfig(apiName, config) {
        if (this.config[apiName]) {
            this.config[apiName] = { ...this.config[apiName], ...config };
        }
    }
    
    /**
     * Verifica saúde das APIs
     */
    async checkAPIHealth() {
        const status = {
            muscleWiki: false,
            exrx: false,
            fallback: true
        };
        
        // Testa MuscleWiki
        if (this.config.muscleWiki.enabled) {
            try {
                const response = await fetch(`${this.config.muscleWiki.baseUrl}/health`, {
                    method: 'HEAD',
                    timeout: 5000
                });
                status.muscleWiki = response.ok;
            } catch (error) {
                console.warn('MuscleWiki API não disponível:', error);
            }
        }
        
        // Testa ExRx
        if (this.config.exrx.enabled) {
            try {
                const response = await fetch(`${this.config.exrx.baseUrl}/health`, {
                    method: 'HEAD',
                    timeout: 5000
                });
                status.exrx = response.ok;
            } catch (error) {
                console.warn('ExRx API não disponível:', error);
            }
        }
        
        return status;
    }
}

// Instância global do serviço
const exerciseAPI = new ExerciseAPIService();

// Exporta para uso em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { API_CONFIG, ExerciseAPIService, exerciseAPI };
} else {
    window.API_CONFIG = API_CONFIG;
    window.ExerciseAPIService = ExerciseAPIService;
    window.exerciseAPI = exerciseAPI;
} 