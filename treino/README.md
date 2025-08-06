# 💪 Gerador de Treino Integrado

Um gerador de treinos inteligente e visual que organiza exercícios por grupos musculares, com integração a serviços de dados de exercícios como [MuscleWiki](https://musclewiki.com/) e [ExRx.net](https://exrx.net/Lists/Directory).

## 🚀 Funcionalidades Principais

### 🎯 Geração de Treinos
- **Organização por Grupos Musculares**: Exercícios categorizados em Peito, Costas, Pernas, Ombros, Braços e Abdômen
- **Seleção Inteligente**: Escolha grupo específico ou deixe aleatório para variedade
- **Treinos Balanceados**: 4-6 exercícios por sessão com parâmetros otimizados

### 📸 Recursos Visuais
- **Imagens Demonstrativas**: Cada exercício inclui imagem ilustrativa
- **Vídeos Educativos**: Demonstrações em vídeo quando disponíveis
- **Interface Moderna**: Design responsivo e intuitivo
- **Modal Informativo**: Detalhes completos de cada exercício

### 🔗 Integração com APIs
- **MuscleWiki API**: Acesso a base de dados visual de exercícios
- **ExRx.net API**: Informações técnicas e científicas
- **Sistema de Fallback**: Funciona mesmo sem conexão com APIs externas
- **Cache Inteligente**: Otimização de performance com cache local

### 📊 Informações Detalhadas
- **Músculos Alvo**: Especificação precisa dos músculos trabalhados
- **Nível de Dificuldade**: Classificação por nível (Iniciante, Intermediário, Avançado)
- **Equipamentos**: Lista de equipamentos necessários
- **Instruções Passo-a-Passo**: Guia detalhado de execução
- **Dicas Profissionais**: Orientações para técnica correta

## 🎯 Como Usar

### Uso Básico
1. Abra o arquivo `index.html` no navegador
2. Selecione o grupo muscular desejado (ou deixe "Grupo Aleatório")
3. Clique em "🎯 Gerar Treino"
4. Explore os exercícios gerados

### Recursos Avançados
- **Botão "ℹ️ Info"**: Clique para ver detalhes completos do exercício
- **Demonstrações Visuais**: Imagens e vídeos para cada movimento
- **Resumo Inteligente**: Tempo estimado e equipamentos necessários

## ⚙️ Configuração e Personalização

### Estrutura de Arquivos
```
treino/
├── index.html          # Interface principal
├── script.js          # Lógica do gerador de treinos
├── style.css          # Estilos da interface
├── api-config.js      # Configurações de API e integração
└── README.md          # Esta documentação
```

### Como Adicionar Novos Exercícios

No arquivo `script.js`, localize o objeto `exerciseDatabase` e adicione exercícios com informações completas:

```javascript
peito: {
    name: 'Peito',
    exercises: [
        {
            name: 'Novo Exercício',
            image: 'url_da_imagem.png',
            video: 'url_do_video.mp4',
            targetMuscles: ['Peitoral Maior', 'Tríceps'],
            equipment: 'Halteres',
            difficulty: 'Intermediário',
            instructions: [
                'Instrução 1',
                'Instrução 2',
                'Instrução 3'
            ],
            tips: 'Dica importante sobre o exercício'
        }
    ]
}
```

### Como Configurar APIs Externas

No arquivo `api-config.js`, configure as APIs:

```javascript
const API_CONFIG = {
    muscleWiki: {
        baseUrl: 'https://musclewiki.com/api',
        enabled: true, // Ativar quando tiver acesso
        // ... outras configurações
    },
    exrx: {
        baseUrl: 'https://exrx.net/api',
        enabled: true, // Ativar quando tiver acesso
        // ... outras configurações
    }
};
```

### Parâmetros de Treino

Modifique as configurações no `script.js`:

```javascript
const workoutConfig = {
    minExercises: 4,        // Mínimo de exercícios
    maxExercises: 6,        // Máximo de exercícios
    sets: { min: 3, max: 4 },      // Faixa de séries
    reps: { min: 8, max: 15 },     // Faixa de repetições
    rest: { min: 45, max: 120 }    // Descanso (segundos)
};
```

## 🔧 Integração com APIs

### APIs Suportadas

#### MuscleWiki.com
- **Imagens**: Demonstrações visuais de alta qualidade
- **Vídeos**: Animações dos movimentos
- **Dados**: Músculos alvo, equipamentos, instruções

#### ExRx.net
- **Base Científica**: Informações técnicas validadas
- **Classificações**: Níveis de dificuldade e categorias
- **Instruções**: Guias detalhados de execução

### Como Ativar as APIs

1. **Obtenha Acesso**: Verifique documentação oficial das APIs
2. **Configure URLs**: Atualize `api-config.js` com endpoints corretos
3. **Ative o Serviço**: Mude `enabled: true` nas configurações
4. **Teste Conectividade**: Use `exerciseAPI.checkAPIHealth()`

### Sistema de Fallback

O sistema funciona em três camadas:
1. **API Principal**: MuscleWiki (primeira opção)
2. **API Secundária**: ExRx.net (backup)
3. **Dados Locais**: Base interna (sempre disponível)

### Cache e Performance

- **Cache Inteligente**: 1 hora de TTL para requisições
- **Otimização**: Evita requisições desnecessárias
- **Controle**: `exerciseAPI.clearCache()` para limpar

## 🎨 Personalização Visual

### Temas e Cores
```css
/* Cores principais */
--primary-color: #4CAF50;
--secondary-color: #667eea;
--accent-color: #ff6b6b;

/* Gradientes */
--header-gradient: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
--background-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Componentes Customizáveis
- **Cartões de Exercício**: Estilo e layout
- **Modal de Detalhes**: Apresentação de informações
- **Badges e Tags**: Indicadores visuais
- **Botões e Controles**: Interatividade

## 📱 Responsividade

### Breakpoints
- **Desktop**: 900px+
- **Tablet**: 768px - 899px
- **Mobile**: < 768px
- **Mobile Pequeno**: < 480px

### Adaptações Mobile
- Layout em coluna única
- Imagens otimizadas
- Controles touch-friendly
- Modal fullscreen

## 🔒 Segurança e Privacidade

### Dados Locais
- **Sem Coleta**: Nenhum dado pessoal é coletado
- **Cache Local**: Dados ficam no navegador
- **Sem Tracking**: Não há rastreamento de usuários

### APIs Externas
- **HTTPS**: Todas as requisições são seguras
- **Timeout**: Proteção contra travamentos
- **Error Handling**: Tratamento robusto de erros

## 🚀 Funcionalidades Futuras

### Planejadas
1. **Histórico de Treinos**: Salvar treinos anteriores
2. **Planos Personalizados**: Criação de rotinas semanais
3. **Timer Integrado**: Cronômetro para descanso
4. **Progressão**: Acompanhamento de evolução
5. **Múltiplos Grupos**: Treinos combinados
6. **Export/Import**: Compartilhamento de treinos

### Integrações Futuras
- **Wearables**: Integração com dispositivos fitness
- **Aplicativos**: Conexão com apps de treino
- **Redes Sociais**: Compartilhamento de resultados

## 🛠️ Desenvolvimento

### Tecnologias Utilizadas
- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos e responsivos
- **JavaScript ES6+**: Lógica e interatividade
- **Fetch API**: Requisições assíncronas
- **Local Storage**: Cache e persistência

### Arquitetura
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Interface     │────│   Controller    │────│   Data Layer    │
│   (HTML/CSS)    │    │   (script.js)   │    │ (api-config.js) │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### API de Exercícios
```javascript
// Buscar detalhes de um exercício
const details = await exerciseAPI.getExerciseDetails('Supino Reto', 'peito');

// Verificar status das APIs
const status = await exerciseAPI.checkAPIHealth();

// Limpar cache
exerciseAPI.clearCache();
```

## 📋 Troubleshooting

### Problemas Comuns

#### Imagens não carregam
- Verificar conexão com internet
- Verificar URLs das APIs no `api-config.js`
- Conferir console do navegador para erros

#### Modal não abre
- Verificar se JavaScript está habilitado
- Conferir se todos os scripts estão carregados
- Verificar console para erros

#### Exercícios não aparecem
- Verificar se `exerciseDatabase` está definido
- Conferir estrutura de dados no `script.js`
- Verificar erros no console

### Debug
```javascript
// Verificar configuração
console.log(API_CONFIG);

// Verificar cache
console.log(API_CACHE);

// Testar API
exerciseAPI.checkAPIHealth().then(console.log);
```

## 📄 Licença

Este projeto é de uso livre para fins pessoais e educacionais. 

### Créditos
- **Dados de Exercícios**: MuscleWiki.com, ExRx.net
- **Design**: Inspirado em melhores práticas de UX/UI
- **Desenvolvimento**: Sistema modular e extensível

---

**💡 Sugestão**: Para melhores resultados, combine este gerador com acompanhamento profissional e mantenha a consistência nos treinos! 