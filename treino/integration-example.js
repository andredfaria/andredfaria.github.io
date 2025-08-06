/**
 * EXEMPLO DE INTEGRAÇÃO COM APIs REAIS
 * 
 * Este arquivo demonstra como implementar integrações reais com serviços
 * como MuscleWiki, ExRx e outras APIs de exercícios.
 * 
 * IMPORTANTE: Este é um arquivo de exemplo. As URLs e estruturas podem
 * não corresponder às APIs reais. Consulte a documentação oficial.
 */

// ==========================================
// EXEMPLO 1: Integração com MuscleWiki
// ==========================================

class MuscleWikiIntegration {
    constructor(apiKey) {
        this.baseUrl = 'https://api.musclewiki.com/v1';
        this.apiKey = apiKey;
    }
    
    async searchExercise(name, muscle) {
        try {
            const response = await fetch(`${this.baseUrl}/exercises/search`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({
                    name: name,
                    muscle: muscle,
                    include_media: true
                })
            });
            
            if (!response.ok) {
                throw new Error(`MuscleWiki API error: ${response.status}`);
            }
            
            const data = await response.json();
            return this.transformMuscleWikiData(data);
            
        } catch (error) {
            console.error('Erro ao buscar exercício no MuscleWiki:', error);
            return null;
        }
    }
    
    transformMuscleWikiData(data) {
        return {
            name: data.exercise_name,
            image: data.images?.front || data.images?.side,
            video: data.video_url,
            targetMuscles: data.target_muscles || [],
            equipment: data.equipment,
            difficulty: data.difficulty_level,
            instructions: data.instructions || [],
            tips: data.tips,
            source: 'MuscleWiki'
        };
    }
}

// ==========================================
// EXEMPLO 2: Integração com ExRx.net
// ==========================================

class ExRxIntegration {
    constructor() {
        this.baseUrl = 'https://exrx.net/api';
        // ExRx pode não ter API pública - este é um exemplo hipotético
    }
    
    async getExerciseData(exerciseName) {
        try {
            // Exemplo de como poderia ser uma requisição para ExRx
            const response = await fetch(`${this.baseUrl}/exercise/${encodeURIComponent(exerciseName)}`, {
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (!response.ok) {
                throw new Error(`ExRx API error: ${response.status}`);
            }
            
            const data = await response.json();
            return this.transformExRxData(data);
            
        } catch (error) {
            console.error('Erro ao buscar exercício no ExRx:', error);
            return null;
        }
    }
    
    transformExRxData(data) {
        return {
            name: data.name,
            targetMuscles: data.target_muscles,
            equipment: data.equipment,
            difficulty: data.difficulty,
            instructions: data.execution_steps,
            tips: data.safety_tips,
            anatomicalInfo: data.anatomy,
            source: 'ExRx'
        };
    }
}

// ==========================================
// EXEMPLO 3: Integração com Fitness APIs
// ==========================================

class FitnessAPIIntegration {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.endpoints = {
            wgerAPI: 'https://wger.de/api/v2',
            rapidAPI: 'https://exercisedb.p.rapidapi.com'
        };
    }
    
    // Exemplo com Wger (API gratuita de exercícios)
    async searchWgerExercise(name) {
        try {
            const response = await fetch(`${this.endpoints.wgerAPI}/exercise/?name=${encodeURIComponent(name)}`, {
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            const data = await response.json();
            return this.transformWgerData(data.results[0]);
            
        } catch (error) {
            console.error('Erro Wger API:', error);
            return null;
        }
    }
    
    // Exemplo com Exercise DB (RapidAPI)
    async searchExerciseDB(muscle) {
        try {
            const response = await fetch(`${this.endpoints.rapidAPI}/exercises/target/${muscle}`, {
                headers: {
                    'X-RapidAPI-Key': this.apiKey,
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                }
            });
            
            const data = await response.json();
            return data.map(exercise => this.transformExerciseDBData(exercise));
            
        } catch (error) {
            console.error('Erro ExerciseDB API:', error);
            return [];
        }
    }
    
    transformWgerData(data) {
        return {
            name: data.name,
            instructions: data.description ? [data.description] : [],
            equipment: data.equipment?.name || 'Não especificado',
            category: data.category?.name,
            source: 'Wger'
        };
    }
    
    transformExerciseDBData(data) {
        return {
            name: data.name,
            image: data.gifUrl,
            targetMuscles: [data.target],
            equipment: data.equipment,
            instructions: data.instructions || [],
            source: 'ExerciseDB'
        };
    }
}

// ==========================================
// EXEMPLO 4: Sistema de Integração Unificado
// ==========================================

class UnifiedExerciseAPI {
    constructor(config) {
        this.providers = {};
        
        // Inicializa provedores baseado na configuração
        if (config.muscleWiki?.apiKey) {
            this.providers.muscleWiki = new MuscleWikiIntegration(config.muscleWiki.apiKey);
        }
        
        if (config.exrx?.enabled) {
            this.providers.exrx = new ExRxIntegration();
        }
        
        if (config.fitness?.apiKey) {
            this.providers.fitness = new FitnessAPIIntegration(config.fitness.apiKey);
        }
    }
    
    async searchExercise(name, muscle, options = {}) {
        const results = [];
        
        // Busca em todos os provedores disponíveis
        for (const [providerName, provider] of Object.entries(this.providers)) {
            try {
                let data = null;
                
                switch (providerName) {
                    case 'muscleWiki':
                        data = await provider.searchExercise(name, muscle);
                        break;
                    case 'exrx':
                        data = await provider.getExerciseData(name);
                        break;
                    case 'fitness':
                        data = await provider.searchWgerExercise(name);
                        break;
                }
                
                if (data) {
                    results.push(data);
                }
                
            } catch (error) {
                console.warn(`Erro no provedor ${providerName}:`, error);
            }
        }
        
        // Combina resultados de múltiplas fontes
        return this.mergeResults(results);
    }
    
    mergeResults(results) {
        if (results.length === 0) return null;
        if (results.length === 1) return results[0];
        
        // Combina dados de múltiplas fontes
        const merged = results[0];
        
        for (let i = 1; i < results.length; i++) {
            const result = results[i];
            
            // Prioriza imagens e vídeos se não existirem
            if (!merged.image && result.image) {
                merged.image = result.image;
            }
            
            if (!merged.video && result.video) {
                merged.video = result.video;
            }
            
            // Combina instruções
            if (result.instructions && result.instructions.length > 0) {
                merged.instructions = [...(merged.instructions || []), ...result.instructions];
            }
            
            // Combina músculos alvo
            if (result.targetMuscles) {
                merged.targetMuscles = [...new Set([...(merged.targetMuscles || []), ...result.targetMuscles])];
            }
            
            // Adiciona fontes
            merged.sources = merged.sources || [merged.source];
            merged.sources.push(result.source);
        }
        
        return merged;
    }
}

// ==========================================
// EXEMPLO 5: Como Usar no Projeto Principal
// ==========================================

// Configuração para integrar com o projeto principal
function initializeRealAPIs() {
    // Configuração das APIs reais
    const apiConfig = {
        muscleWiki: {
            apiKey: 'SUA_CHAVE_MUSCLEWIKI', // Obter do MuscleWiki
            enabled: true
        },
        fitness: {
            apiKey: 'SUA_CHAVE_RAPIDAPI', // Obter do RapidAPI
            enabled: true
        },
        exrx: {
            enabled: false // ExRx pode não ter API pública
        }
    };
    
    // Cria instância unificada
    const unifiedAPI = new UnifiedExerciseAPI(apiConfig);
    
    // Sobrescreve o método do ExerciseAPIService original
    if (window.exerciseAPI) {
        const originalGetExerciseDetails = window.exerciseAPI.getExerciseDetails.bind(window.exerciseAPI);
        
        window.exerciseAPI.getExerciseDetails = async function(exerciseName, muscleGroup) {
            try {
                // Tenta buscar nas APIs reais primeiro
                const realData = await unifiedAPI.searchExercise(exerciseName, muscleGroup);
                
                if (realData) {
                    // Cache o resultado
                    this.cache.set(`exercises.${muscleGroup}.${exerciseName}`, realData);
                    return realData;
                }
                
                // Fallback para método original
                return await originalGetExerciseDetails(exerciseName, muscleGroup);
                
            } catch (error) {
                console.error('Erro na API unificada:', error);
                return await originalGetExerciseDetails(exerciseName, muscleGroup);
            }
        };
    }
}

// ==========================================
// EXEMPLO 6: APIs Gratuitas Disponíveis
// ==========================================

const FREE_APIS = {
    // Wger - API gratuita de exercícios
    wger: {
        url: 'https://wger.de/api/v2/',
        documentation: 'https://wger.de/en/software/api',
        features: ['Exercícios', 'Músculos', 'Equipamentos'],
        free: true
    },
    
    // ExerciseDB via RapidAPI (freemium)
    exerciseDB: {
        url: 'https://exercisedb.p.rapidapi.com',
        documentation: 'https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb',
        features: ['1300+ exercícios', 'GIFs', 'Músculos alvo'],
        free: 'Limitado'
    },
    
    // FitNotes API (hipotética - verificar disponibilidade)
    fitNotes: {
        url: 'https://api.fitnotes.com',
        features: ['Exercícios básicos', 'Categorização'],
        free: true,
        note: 'Verificar se existe API pública'
    }
};

// ==========================================
// INSTRUÇÕES DE USO
// ==========================================

/*
COMO IMPLEMENTAR INTEGRAÇÃO REAL:

1. OBTER CHAVES DE API:
   - Registre-se nos serviços desejados
   - Obtenha as chaves de API necessárias
   - Configure rate limits e quotas

2. CONFIGURAR ENDPOINTS:
   - Atualize api-config.js com URLs reais
   - Configure headers de autenticação
   - Implemente tratamento de erros

3. TESTAR INTEGRAÇÃO:
   - Use console.log para debug
   - Teste com exercícios conhecidos
   - Verifique rate limits

4. IMPLEMENTAR CACHE:
   - Configure TTL apropriado
   - Implemente invalidação de cache
   - Monitore uso de storage

5. ADICIONAR FALLBACKS:
   - Mantenha dados locais atualizados
   - Implemente degradação graceful
   - Configure timeouts apropriados

EXEMPLO DE INICIALIZAÇÃO:
// No final do script.js, adicione:
document.addEventListener('DOMContentLoaded', () => {
    // Inicialização normal
    workoutGenerator = new WorkoutGenerator();
    
    // Inicialização de APIs reais (se configuradas)
    if (typeof initializeRealAPIs === 'function') {
        initializeRealAPIs();
    }
});
*/

// Exporta para uso se necessário
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        MuscleWikiIntegration,
        ExRxIntegration,
        FitnessAPIIntegration,
        UnifiedExerciseAPI,
        initializeRealAPIs,
        FREE_APIS
    };
} 