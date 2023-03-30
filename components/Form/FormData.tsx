interface IFormData {
    title: string
    subTitle: string
    questionList: string[]
  }
  
  export const formData: IFormData = {
    title: 'Tell us a bit about you!',
    questionList: [
      'What is your dietary preferences?',
      'What do you have in your kitchen?',
      'Are you okay with adding extra pantry ingredients?',
    ],
    subTitle: 'Summary'
  }