import { Activity } from '../interfaces/activity.interface';

const availableActivities: Activity[] = [
    
    // Higiene
    { name: 'Escovar Dentes', icon: '🦷', color: '#3B82F6', category: 'Higiene', description: 'Escovar os dentes após as refeições', imageSrc: 'escovar-os-dentes.jpeg' },
    { name: 'Tomar Banho', icon: '🚿', color: '#06B6D4', category: 'Higiene', description: 'Tomar banho completo', imageSrc: 'tomar-banho.jpeg' },
    { name: 'Lavar as Mãos', icon: '🧼', color: '#8B5CF6', category: 'Higiene', description: 'Lavar as mãos com sabão', imageSrc: 'lavar-as-maos.jpeg' },
    
    // Alimentação
    { name: 'Café da Manhã', icon: '🍳', color: '#F59E0B', category: 'Alimentação', description: 'Primeira refeição do dia', imageSrc: 'lanchar.jpeg' },
    { name: 'Almoço', icon: '🍽️', color: '#EF4444', category: 'Alimentação', description: 'Refeição do meio-dia', imageSrc: 'almocar.jpeg' },
    { name: 'Jantar', icon: '🍲', color: '#F97316', category: 'Alimentação', description: 'Refeição da noite', imageSrc: 'jantar.jpeg' },
    { name: 'Lanche', icon: '🍎', color: '#84CC16', category: 'Alimentação', description: 'Lanche saudável', imageSrc: 'lanchar.jpeg' },
    
    // Educação
    { name: 'Lição de Casa', icon: '✏️', color: '#10B981', category: 'Educação', description: 'Fazer tarefas escolares', imageSrc: 'licao-de-casa.jpeg' },
    { name: 'Ler Livro', icon: '📚', color: '#8B5CF6', category: 'Educação', description: 'Ler por pelo menos 15 minutos', imageSrc: 'ler.jpeg' },
    { name: 'Estudar', icon: '📖', color: '#6366F1', category: 'Educação', description: 'Tempo de estudo', imageSrc: 'estudar.jpeg' },
    { name: 'Escola', icon: '📖', color: '#48d9ecff', category: 'Educação', description: 'Hora de aprender mais', imageSrc: 'escola.jpeg' },
    
    // Lazer
    { name: 'Brincar', icon: '🎮', color: '#EC4899', category: 'Lazer', description: 'Tempo livre para brincar', imageSrc: 'brincar.jpeg' },
    { name: 'Desenhar', icon: '🎨', color: '#F59E0B', category: 'Lazer', description: 'Atividade artística', imageSrc: 'desenhar.jpeg' },
    { name: 'Assistir TV', icon: '📺', color: '#A855F7', category: 'Lazer', description: 'Tempo de tela controlado', imageSrc: 'assistir-tv.jpeg' },
    
    // Sono
    { name: 'Dormir', icon: '😴', color: '#6366F1', category: 'Sono', description: 'Hora de dormir', imageSrc: 'dormir.jpeg' },
    { name: 'Soneca', icon: '💤', color: '#818CF8', category: 'Sono', description: 'Cochilo da tarde', imageSrc: 'dormir.jpeg' },
    
    // Atividades Físicas
    { name: 'Caminhar', icon: '🚶', color: '#10B981', category: 'Atividade Física', description: 'Caminhada leve por 15-20 minutos', imageSrc: 'caminhar.jpeg' },
    // { name: 'Pular Corda', icon: '🪢', color: '#EF4444', category: 'Atividade Física', description: 'Exercício cardiovascular divertido', imageSrc: 'brincar.jpeg' },
    // { name: 'Dançar', icon: '💃', color: '#EC4899', category: 'Atividade Física', description: 'Dançar ao som de músicas favoritas', imageSrc: 'dancar.jpeg' },
    // { name: 'Andar de Bicicleta', icon: '🚴', color: '#3B82F6', category: 'Atividade Física', description: 'Pedalar na rua ou bicicleta', imageSrc: 'andar-de-bicicleta.jpeg' },
    // { name: 'Alongamento', icon: '🧘', color: '#8B5CF6', category: 'Atividade Física', description: 'Exercícios de alongamento suave', imageSrc: 'alongamento.jpeg' },
    // { name: 'Jogar Bola', icon: '⚽', color: '#F97316', category: 'Atividade Física', description: 'Jogar bola no quintal ou parque', imageSrc: 'jogar-bola.jpeg' },
    // { name: 'Nadar', icon: '🏊', color: '#06B6D4', category: 'Atividade Física', description: 'Natação - excelente para autismo', imageSrc: 'nadar.jpeg' },
   
    
    // Relaxamento e Concentração
    { name: 'Respiração Profunda', icon: '🌬️', color: '#06B6D4', category: 'Relaxamento', description: 'Exercícios de respiração para acalmar', imageSrc: 'relaxar.jpeg' },
    // { name: 'Yoga para Crianças', icon: '🧘', color: '#8B5CF6', category: 'Relaxamento', description: 'Posturas simples de yoga', imageSrc: 'relaxar.jpeg' },
    { name: 'Ouvir Música Calma', icon: '🎵', color: '#818CF8', category: 'Relaxamento', description: 'Músicas relaxantes ou preferidas', imageSrc: 'ouvir-musica.jpeg' },
    // { name: 'Brincar com Massinha', icon: '🎨', color: '#F59E0B', category: 'Relaxamento', description: 'Atividade sensorial calmante', imageSrc: 'brincar.jpeg' },
    // { name: 'Quebra-cabeça', icon: '🧩', color: '#10B981', category: 'Concentração', description: 'Desenvolve foco e paciência', imageSrc: 'brincar.jpeg' },
    { name: 'Colorir', icon: '🖍️', color: '#A855F7', category: 'Concentração', description: 'Atividade relaxante e focada', imageSrc: 'desenhar.jpeg' },
    // { name: 'Contar Histórias', icon: '📖', color: '#EF4444', category: 'Concentração', description: 'Ouvir ou contar histórias', imageSrc: 'brincar.jpeg' },
    // { name: 'Brincadeira com Areia', icon: '🏖️', color: '#F59E0B', category: 'Relaxamento', description: 'Caixa de areia - estímulo sensoriabrincar.jpegl', imageSrc: '' },
    // { name: 'Bolhas de Sabão', icon: '⚪', color: '#06B6D4', category: 'Relaxamento', description: 'Soprar e estourar bolhas - diversão calmantbrincar.jpege', imageSrc: '' },
    // { name: 'Abraço Apertado', icon: '🤗', color: '#EC4899', category: 'Relaxamento', description: 'Pressão profunda para acalmar', imageSrc: 'brincar.jpeg' },
    // { name: 'Balanço', icon: '🎪', color: '#8B5CF6', category: 'Relaxamento', description: 'Movimento rítmico calmante', imageSrc: 'brincar.jpeg' },

];

export default availableActivities;
