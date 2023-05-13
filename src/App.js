
function App() {
  
  /*           Задача 3                   */

  const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];

  const positive = array.filter(item => item > 0)

  const positively = positive.map(item =>{
    return <div>{item}</div>
  })

  /*           Задача 2                 */

  const messages = [
    {message: 'hello', error: true},  
    {message: 'javascript', error: false},  
    {message: 'expovisiov', error: true},  
    {message: 'react', error: true},  
    {message: 'angular', error: false}, 
    {message: 'es6', error: false}, 
  ];

  const filtered = messages.filter(obj => obj.error === false);
  
  console.log(filtered);

  /*            Задача 3                */

  const words= ['экспо', 'js', 'react', 'css', 'angular', 'vue', 'html'];

  const star = words.map(word => word.length < 5 ? ' * ' : word)
 
  /*            Задача 4                */

  const sendMessage = message => {
    /*   какое-то сообщение   */
  }

  const half = number => number / 2;

  const showConsole = () => console.log('Экспо')

  const concatWords = (first, second) => first + second

  /*            Задача 5                */

  function justText(){
    return 'expo'
  }

  function logging(text){
    console.log(text)
  }

  function add(x, y){
    const z = 3
    return z * x * y;
  }

  function onlyPositive(number){
    if(number < 0){
      return false
    }
    return true
  }

  return(
    <div>
      {positively}
      {star}
    </div>
  )
}

export default App;
