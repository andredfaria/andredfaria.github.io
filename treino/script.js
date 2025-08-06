// Estrutura expandida com informações detalhadas dos exercícios
const exerciseDatabase = {
    peito: {
        name: 'Peito',
        exercises: [
            {
                name: 'Supino Reto',
                image: 'https://musclewiki.com/media/uploads/male-barbell-bench-press-front.png',
                video: 'https://musclewiki.com/media/uploads/videos/male-barbell-bench-press-front.mp4',
                targetMuscles: ['Peitoral Maior', 'Tríceps', 'Deltóide Anterior'],
                equipment: 'Barra e banco',
                difficulty: 'Intermediário',
                instructions: [
                    'Deite-se no banco com os pés firmes no chão',
                    'Segure a barra com pegada ligeiramente mais larga que os ombros',
                    'Abaixe a barra controladamente até o peito',
                    'Empurre a barra de volta à posição inicial'
                ],
                tips: 'Mantenha os ombros retraídos e evite arquear demais as costas'
            },
            {
                name: 'Supino Inclinado',
                image: 'https://musclewiki.com/media/uploads/male-barbell-incline-bench-press-front.png',
                video: 'https://musclewiki.com/media/uploads/videos/male-barbell-incline-bench-press-front.mp4',
                targetMuscles: ['Peitoral Maior (Porção Superior)', 'Deltóide Anterior', 'Tríceps'],
                equipment: 'Barra e banco inclinado',
                difficulty: 'Intermediário',
                instructions: [
                    'Ajuste o banco em 30-45 graus de inclinação',
                    'Posicione-se com as costas bem apoiadas',
                    'Segure a barra com pegada um pouco mais larga que os ombros',
                    'Abaixe controladamente até a linha do peito superior'
                ],
                tips: 'Foque na contração da porção superior do peitoral'
            },
            {
                name: 'Flexão de Braços',
                image: 'https://musclewiki.com/media/uploads/male-bodyweight-push-up-front.png',
                video: 'https://musclewiki.com/media/uploads/videos/male-bodyweight-push-up-front.mp4',
                targetMuscles: ['Peitoral Maior', 'Tríceps', 'Core'],
                equipment: 'Peso corporal',
                difficulty: 'Iniciante',
                instructions: [
                    'Posicione-se em prancha com braços estendidos',
                    'Mantenha o corpo em linha reta',
                    'Abaixe o corpo até quase tocar o chão',
                    'Empurre de volta à posição inicial'
                ],
                tips: 'Mantenha o core contraído durante todo o movimento'
            },
            {
                name: 'Crucifixo',
                image: 'https://musclewiki.com/media/uploads/male-dumbbell-fly-front.png',
                video: 'https://musclewiki.com/media/uploads/videos/male-dumbbell-fly-front.mp4',
                targetMuscles: ['Peitoral Maior', 'Deltóide Anterior'],
                equipment: 'Halteres e banco',
                difficulty: 'Intermediário',
                instructions: [
                    'Deite-se no banco com um halter em cada mão',
                    'Abra os braços em arco, mantendo leve flexão nos cotovelos',
                    'Desça até sentir alongamento no peito',
                    'Contraia o peito para voltar à posição inicial'
                ],
                tips: 'Movimento deve ser controlado, evite usar peso excessivo'
            }
        ]
    },
    costas: {
        name: 'Costas',
        exercises: [
            {
                name: 'Barra Fixa',
                image: 'https://musclewiki.com/media/uploads/male-bodyweight-pull-up-back.png',
                video: 'https://musclewiki.com/media/uploads/videos/male-bodyweight-pull-up-back.mp4',
                targetMuscles: ['Latíssimo do Dorso', 'Bíceps', 'Rombóides'],
                equipment: 'Barra fixa',
                difficulty: 'Avançado',
                instructions: [
                    'Segure a barra com pegada pronada, mãos afastadas',
                    'Pendure-se com braços completamente estendidos',
                    'Puxe o corpo até o queixo passar da barra',
                    'Desça controladamente à posição inicial'
                ],
                tips: 'Se for difícil, use elástico ou máquina assistida'
            },
            {
                name: 'Remada Curvada',
                image: 'https://musclewiki.com/media/uploads/male-barbell-bent-over-row-back.png',
                video: 'https://musclewiki.com/media/uploads/videos/male-barbell-bent-over-row-back.mp4',
                targetMuscles: ['Latíssimo do Dorso', 'Rombóides', 'Bíceps'],
                equipment: 'Barra',
                difficulty: 'Intermediário',
                instructions: [
                    'Fique em pé com joelhos levemente flexionados',
                    'Incline o tronco mantendo as costas retas',
                    'Puxe a barra em direção ao abdômen',
                    'Contraia as escápulas no topo do movimento'
                ],
                tips: 'Mantenha o core contraído e evite balançar o corpo'
            },
            {
                name: 'Levantamento Terra',
                image: 'https://musclewiki.com/media/uploads/male-barbell-deadlift-back.png',
                video: 'https://musclewiki.com/media/uploads/videos/male-barbell-deadlift-back.mp4',
                targetMuscles: ['Eritores da Espinha', 'Glúteos', 'Isquiotibiais'],
                equipment: 'Barra',
                difficulty: 'Avançado',
                instructions: [
                    'Posicione-se com pés afastados na largura dos quadris',
                    'Segure a barra com pegada mista ou dupla pronada',
                    'Mantenha costas retas e peito para fora',
                    'Levante estendendo quadris e joelhos simultaneamente'
                ],
                tips: 'Movimento fundamental - comece com peso leve e foque na técnica'
            }
        ]
    },
    pernas: {
        name: 'Pernas',
        exercises: [
            {
                name: 'Agachamento',
                image: 'https://musclewiki.com/media/uploads/male-barbell-squat-front.png',
                video: 'https://musclewiki.com/media/uploads/videos/male-barbell-squat-front.mp4',
                targetMuscles: ['Quadríceps', 'Glúteos', 'Core'],
                equipment: 'Barra',
                difficulty: 'Intermediário',
                instructions: [
                    'Posicione a barra nos trapézios superiores',
                    'Pés afastados na largura dos ombros',
                    'Desça flexionando quadris e joelhos',
                    'Mantenha joelhos alinhados com os pés'
                ],
                tips: 'Desça até as coxas ficarem paralelas ao solo'
            },
            {
                name: 'Afundo',
                image: 'https://musclewiki.com/media/uploads/male-dumbbell-lunge-front.png',
                video: 'https://musclewiki.com/media/uploads/videos/male-dumbbell-lunge-front.mp4',
                targetMuscles: ['Quadríceps', 'Glúteos', 'Isquiotibiais'],
                equipment: 'Halteres',
                difficulty: 'Intermediário',
                instructions: [
                    'Dê um passo grande à frente',
                    'Abaixe o joelho traseiro em direção ao solo',
                    'Mantenha o joelho da frente alinhado com o tornozelo',
                    'Empurre com a perna da frente para voltar'
                ],
                tips: 'Mantenha o tronco ereto durante todo o movimento'
            }
        ]
    },
    ombros: {
        name: 'Ombros',
        exercises: [
            {
                name: 'Desenvolvimento',
                image: 'https://musclewiki.com/media/uploads/male-barbell-overhead-press-front.png',
                video: 'https://musclewiki.com/media/uploads/videos/male-barbell-overhead-press-front.mp4',
                targetMuscles: ['Deltóide', 'Tríceps', 'Core'],
                equipment: 'Barra',
                difficulty: 'Intermediário',
                instructions: [
                    'Segure a barra na altura dos ombros',
                    'Pés afastados na largura dos quadris',
                    'Empurre a barra verticalmente acima da cabeça',
                    'Abaixe controladamente à posição inicial'
                ],
                tips: 'Mantenha o core contraído para estabilizar a coluna'
            },
            {
                name: 'Elevação Lateral',
                image: 'https://musclewiki.com/media/uploads/male-dumbbell-lateral-raise-front.png',
                video: 'https://musclewiki.com/media/uploads/videos/male-dumbbell-lateral-raise-front.mp4',
                targetMuscles: ['Deltóide Médio'],
                equipment: 'Halteres',
                difficulty: 'Iniciante',
                instructions: [
                    'Segure halteres ao lado do corpo',
                    'Levante os braços lateralmente até a altura dos ombros',
                    'Mantenha leve flexão nos cotovelos',
                    'Abaixe controladamente'
                ],
                tips: 'Evite balançar o corpo, movimento deve ser isolado'
            }
        ]
    },
    bracos: {
        name: 'Braços',
        exercises: [
            {
                name: 'Rosca Direta',
                image: 'https://musclewiki.com/media/uploads/male-barbell-curl-front.png',
                video: 'https://musclewiki.com/media/uploads/videos/male-barbell-curl-front.mp4',
                targetMuscles: ['Bíceps Braquial', 'Braquial'],
                equipment: 'Barra',
                difficulty: 'Iniciante',
                instructions: [
                    'Segure a barra com pegada supinada',
                    'Mantenha cotovelos próximos ao corpo',
                    'Flexione os braços contraindo os bíceps',
                    'Abaixe controladamente à posição inicial'
                ],
                tips: 'Evite balançar o corpo, foque na contração do bíceps'
            },
            {
                name: 'Tríceps Testa',
                image: 'https://musclewiki.com/media/uploads/male-barbell-lying-triceps-extension-front.png',
                video: 'https://musclewiki.com/media/uploads/videos/male-barbell-lying-triceps-extension-front.mp4',
                targetMuscles: ['Tríceps Braquial'],
                equipment: 'Barra e banco',
                difficulty: 'Intermediário',
                instructions: [
                    'Deite-se no banco segurando a barra',
                    'Mantenha cotovelos fixos apontando para cima',
                    'Abaixe a barra flexionando apenas os antebraços',
                    'Estenda os braços de volta à posição inicial'
                ],
                tips: 'Mantenha cotovelos estáveis durante todo o movimento'
            }
        ]
    },
    abdomen: {
        name: 'Abdômen',
        exercises: [
            {
                name: 'Prancha',
                image: 'https://musclewiki.com/media/uploads/male-bodyweight-plank-front.png',
                video: 'https://musclewiki.com/media/uploads/videos/male-bodyweight-plank-front.mp4',
                targetMuscles: ['Core', 'Transverso do Abdômen'],
                equipment: 'Peso corporal',
                difficulty: 'Iniciante',
                instructions: [
                    'Posicione-se em apoio sobre antebraços e pés',
                    'Mantenha o corpo em linha reta',
                    'Contraia o abdômen e glúteos',
                    'Respire normalmente mantendo a posição'
                ],
                tips: 'Qualidade é mais importante que quantidade - mantenha boa forma'
            },
            {
                name: 'Abdominal Supra',
                image: 'https://musclewiki.com/media/uploads/male-bodyweight-crunch-front.png',
                video: 'https://musclewiki.com/media/uploads/videos/male-bodyweight-crunch-front.mp4',
                targetMuscles: ['Reto Abdominal'],
                equipment: 'Peso corporal',
                difficulty: 'Iniciante',
                instructions: [
                    'Deite-se com joelhos flexionados',
                    'Mãos atrás da cabeça ou cruzadas no peito',
                    'Contraia o abdômen elevando os ombros',
                    'Abaixe controladamente sem relaxar completamente'
                ],
                tips: 'Evite puxar o pescoço, movimento vem do abdômen'
            }
        ]
    }
};

// Configurações de treino expandidas
const workoutConfig = {
    minExercises: 4,
    maxExercises: 6,
    sets: { min: 3, max: 4 },
    reps: { min: 8, max: 15 },
    rest: { min: 45, max: 120 }
};

// Sistema de fallback para imagens
// Utiliza serviço configurável (via API_CONFIG) ou padrão via.placeholder.com
const placeholderBase = (window.API_CONFIG?.fallback?.imageService) || 'https://via.placeholder.com';

function generatePlaceholder(text) {
    return `${placeholderBase}/300x200?text=${encodeURIComponent(text)}`;
}

const fallbackImages = {
    peito: generatePlaceholder('Exercício Peito'),
    costas: generatePlaceholder('Exercício Costas'),
    pernas: generatePlaceholder('Exercício Pernas'),
    ombros: generatePlaceholder('Exercício Ombros'),
    bracos: generatePlaceholder('Exercício Braços'),
    abdomen: generatePlaceholder('Exercício Abdômen')
};

class WorkoutGenerator {
    constructor() {
        this.generateBtn = document.getElementById('generate-btn');
        this.workoutDiv = document.getElementById('workout');
        this.muscleGroupSelect = document.getElementById('muscle-group');
        this.currentWorkout = null;
        this.init();
    }

    init() {
        this.populateMuscleGroups();
        this.generateBtn.addEventListener('click', () => this.generateWorkout());
        this.createModal();
    }

    populateMuscleGroups() {
        // Adiciona opção "Aleatório"
        const randomOption = document.createElement('option');
        randomOption.value = 'random';
        randomOption.textContent = '🎲 Grupo Aleatório';
        this.muscleGroupSelect.appendChild(randomOption);

        // Adiciona grupos musculares com emojis
        const groupEmojis = {
            peito: '💪',
            costas: '🏋️',
            pernas: '🦵',
            ombros: '🤲',
            bracos: '💪',
            abdomen: '🟫'
        };

        Object.keys(exerciseDatabase).forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = `${groupEmojis[key]} ${exerciseDatabase[key].name}`;
            this.muscleGroupSelect.appendChild(option);
        });
    }

    createModal() {
        // Cria modal para detalhes do exercício
        const modal = document.createElement('div');
        modal.id = 'exercise-modal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <div id="modal-body"></div>
            </div>
        `;
        document.body.appendChild(modal);

        // Event listeners para modal
        modal.querySelector('.close-btn').addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    getRandomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    selectMuscleGroup() {
        const selectedGroup = this.muscleGroupSelect.value;
        
        if (selectedGroup === 'random') {
            const groups = Object.keys(exerciseDatabase);
            return this.getRandomItem(groups);
        }
        
        return selectedGroup;
    }

    generateWorkout() {
        this.workoutDiv.innerHTML = '';
        
        const muscleGroup = this.selectMuscleGroup();
        const groupData = exerciseDatabase[muscleGroup];
        
        // Header do treino
        const headerDiv = document.createElement('div');
        headerDiv.className = 'workout-header';
        headerDiv.innerHTML = `
            <h2>🎯 Treino de ${groupData.name}</h2>
            <p class="workout-description">Foco: Desenvolvimento do ${groupData.name}</p>
            <div class="workout-stats">
                <span class="stat-item">📊 Nível: Personalizado</span>
                <span class="stat-item">⏱️ Duração: 30-45 min</span>
            </div>
        `;
        this.workoutDiv.appendChild(headerDiv);

        // Gera exercícios
        const numExercises = this.getRandomNumber(
            workoutConfig.minExercises, 
            workoutConfig.maxExercises
        );
        
        const selectedExercises = [];
        const availableExercises = [...groupData.exercises];

        // Seleciona exercícios únicos
        while (selectedExercises.length < numExercises && availableExercises.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableExercises.length);
            const exercise = availableExercises.splice(randomIndex, 1)[0];
            selectedExercises.push(exercise);
        }

        // Cria elementos dos exercícios
        selectedExercises.forEach((exercise, index) => {
            const exerciseElement = this.createExerciseElement(exercise, index + 1, muscleGroup);
            this.workoutDiv.appendChild(exerciseElement);
        });

        // Adiciona resumo do treino
        this.addWorkoutSummary(selectedExercises);
        this.currentWorkout = { muscleGroup, exercises: selectedExercises };
    }

    createExerciseElement(exercise, order, muscleGroup) {
        const sets = this.getRandomNumber(workoutConfig.sets.min, workoutConfig.sets.max);
        const reps = this.getRandomNumber(workoutConfig.reps.min, workoutConfig.reps.max);
        const rest = this.getRandomNumber(workoutConfig.rest.min, workoutConfig.rest.max);

        const exerciseDiv = document.createElement('div');
        exerciseDiv.className = 'exercise';
        
        // Determina se é string (formato antigo) ou objeto (formato novo)
        const exerciseName = typeof exercise === 'string' ? exercise : exercise.name;
        const exerciseImage = typeof exercise === 'object' ? exercise.image : fallbackImages[muscleGroup];
        const difficulty = typeof exercise === 'object' ? exercise.difficulty : 'Padrão';
        const equipment = typeof exercise === 'object' ? exercise.equipment : 'Equipamento padrão';

        exerciseDiv.innerHTML = `
            <div class="exercise-header">
                <span class="exercise-order">${order}</span>
                <div class="exercise-info">
                    <h3 class="exercise-name">${exerciseName}</h3>
                    <div class="exercise-meta">
                        <span class="difficulty difficulty-${difficulty.toLowerCase()}">🏅 ${difficulty}</span>
                        <span class="equipment">🏃 ${equipment}</span>
                    </div>
                </div>
                <button class="info-btn" onclick="workoutGenerator.showExerciseDetails('${exerciseName}', '${muscleGroup}')">
                    ℹ️ Info
                </button>
            </div>
            
            <div class="exercise-visual">
                <img src="${exerciseImage}" alt="${exerciseName}" class="exercise-image" 
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkV4ZXJjw61jaW88L3RleHQ+PC9zdmc+'">
            </div>
            
            <div class="exercise-details">
                <div class="detail-item">
                    <span class="detail-label">Séries</span>
                    <span class="detail-value">${sets}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Repetições</span>
                    <span class="detail-value">${reps}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Descanso</span>
                    <span class="detail-value">${rest}s</span>
                </div>
            </div>
        `;
        return exerciseDiv;
    }

    showExerciseDetails(exerciseName, muscleGroup) {
        const modal = document.getElementById('exercise-modal');
        const modalBody = document.getElementById('modal-body');
        
        // Encontra o exercício
        const exercise = exerciseDatabase[muscleGroup].exercises.find(ex => 
            (typeof ex === 'string' ? ex : ex.name) === exerciseName
        );

        if (typeof exercise === 'string') {
            modalBody.innerHTML = `
                <h2>${exercise}</h2>
                <p>Informações detalhadas não disponíveis para este exercício.</p>
            `;
        } else {
            modalBody.innerHTML = `
                <div class="exercise-detail-header">
                    <h2>${exercise.name}</h2>
                    <div class="exercise-badges">
                        <span class="badge difficulty-${exercise.difficulty.toLowerCase()}">${exercise.difficulty}</span>
                        <span class="badge equipment-badge">${exercise.equipment}</span>
                    </div>
                </div>
                
                <div class="exercise-media">
                    <img src="${exercise.image}" alt="${exercise.name}" class="detail-image"
                         onerror="this.style.display='none'">
                    ${exercise.video ? `
                        <video controls class="detail-video" style="display:none;">
                            <source src="${exercise.video}" type="video/mp4">
                            Seu navegador não suporta vídeo.
                        </video>
                        <button onclick="this.previousElementSibling.style.display='block'; this.style.display='none';" class="video-btn">
                            ▶️ Assistir Demonstração
                        </button>
                    ` : ''}
                </div>
                
                <div class="muscle-targets">
                    <h3>🎯 Músculos Alvo</h3>
                    <div class="muscle-list">
                        ${exercise.targetMuscles.map(muscle => `<span class="muscle-tag">${muscle}</span>`).join('')}
                    </div>
                </div>
                
                <div class="exercise-instructions">
                    <h3>📋 Instruções</h3>
                    <ol>
                        ${exercise.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                    </ol>
                </div>
                
                <div class="exercise-tips">
                    <h3>💡 Dica Importante</h3>
                    <p>${exercise.tips}</p>
                </div>
            `;
        }
        
        modal.style.display = 'block';
    }

    addWorkoutSummary(exercises) {
        const summaryDiv = document.createElement('div');
        summaryDiv.className = 'workout-summary';
        
        const totalExercises = exercises.length;
        const estimatedTime = Math.round((totalExercises * 4 * 60) / 60); // Estimativa mais realista
        
        // Calcula equipamentos necessários
        const equipmentSet = new Set();
        exercises.forEach(ex => {
            if (typeof ex === 'object' && ex.equipment) {
                equipmentSet.add(ex.equipment);
            }
        });
        
        summaryDiv.innerHTML = `
            <h3>📊 Resumo do Treino</h3>
            <div class="summary-grid">
                <div class="summary-item">
                    <span class="summary-label">Exercícios:</span>
                    <span class="summary-value">${totalExercises}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Tempo estimado:</span>
                    <span class="summary-value">${estimatedTime} min</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Equipamentos:</span>
                    <span class="summary-value">${equipmentSet.size} tipos</span>
                </div>
            </div>
            
            <div class="equipment-list">
                <h4>🏃 Equipamentos Necessários:</h4>
                <div class="equipment-tags">
                    ${Array.from(equipmentSet).map(eq => `<span class="equipment-tag">${eq}</span>`).join('')}
                </div>
            </div>
            
            <div class="workout-tips">
                <h4>🔥 Dicas para o Treino:</h4>
                <ul>
                    <li>Faça aquecimento de 5-10 minutos antes de começar</li>
                    <li>Mantenha hidratação adequada durante o treino</li>
                    <li>Foque na técnica correta em todos os exercícios</li>
                    <li>Respeite os tempos de descanso entre séries</li>
                </ul>
            </div>
        `;
        
        this.workoutDiv.appendChild(summaryDiv);
    }
}

// Instância global para acesso aos métodos
let workoutGenerator;

// Inicializa quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    workoutGenerator = new WorkoutGenerator();
});