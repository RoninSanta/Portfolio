const header = {
  homepage: 'https://RoninSanta.github.io/Portfolio',
}

const about = {
  name: 'Joseph Shen Fan',
  description:
    'My journey in computer science began with diverse past work experiences, where I was introduced the concept of programming and real-world challenges. This inspired me to embark on a formal education in Computer Science, which I graduated with First-Class Honors. I am passionate about this field and cannot wait to translate my creative skills into impactful solutions.',
  resume: 'https://github.com/RoninSanta/Portfolio/blob/main/assets/Resume.pdf',
}

const projects = [
  {
    name: 'JavaScript',
    description:
      'A Mario Game clone using P5 library,a JavaScript library for creative coding in graphic and interactive projects',
    stack: ['p5.JS', 'JavaScript', 'Game Design'],
    sourceCode: 'https://github.com/RoninSanta/Game_Project-Mario_Clone',
  },
  {
    name: 'React Native',
    description:
      'A mobile app I created in React-Native to show Bus Stops and associated Bus Information in Singapore.',
    stack: ['API', 'JavaScript', 'React', 'Expo'],
    sourceCode: 'https://github.com/RoninSanta/Mobile_App_Dev_API-SGBusInfoAPP',
    livePreview:
      'https://snack.expo.dev/@joseph_shen/fyp-busarrivalapp?platform=ios',
  },
  {
    name: 'Machine Learning-Text Recognition',
    description:
      'Train a model that could transcribe ancient Japanese scripts into modern readable characters for researchers.',
    stack: [
      'Jupyter Notebook',
      'Python',
      'Machine Learning',
      'KNN Classifier',
      'Data visualization',
    ],
    sourceCode:
      'https://github.com/RoninSanta/Machine_Learning-Classical_JAP_Literature_Text_Recognition',
  },
  {
    name: 'C++',
    description: 'DJ Application created using JUCE (An Audio Player GUI)',
    stack: ['OttoDeck', 'JUCE', 'Audio Player', 'GUI Design'],
    sourceCode: 'https://github.com/RoninSanta/DJ_Application-JUCE_Ottodeck',
  },
  {
    name: 'Artificial Intelligence',
    description:
      'Testing the effects of Evolutionary Genetic algorithm to create an object that can learn to walk without user interference',
    stack: ['Python', 'Genetic Algorithm', 'AI'],
    sourceCode:
      'https://github.com/RoninSanta/Artificial_Intelligence-Genetic_Algorithms_on_Objects',
  },
  {
    name: 'Python',
    description:
      'A lightweight python script that could detect motion in camera footage, track its movement and recognize objects in the moving footage',
    stack: ['Python', 'Numpy', 'AI'],
    sourceCode:
      'https://github.com/RoninSanta/CM3070-Camera-Surveillance-System-Project/tree/main',
    livePreview: 'https://www.youtube.com/watch?v=5VUF1SD0QZ4',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Machine Learning',
  'Artificial Intelligence',
  'C++',
  'Python',
  'Jupyter Notbook',
  'SQL',
]

const contact = {
  email: 'johnsmith@mail.com',
  social: {
    linkedin: ' https://linkedin.com/in/joseph-shen-4267a8b0',
    github: 'https://github.com/RoninSanta',
    
  },
}

export { header, about, projects, skills, contact }
