import '../styles/signuppage.css'
function SignUpPage(){
     return <div className="SignUpPage">
            <Container/>
     </div>
} 
const [selectedValue, setValue] = useState('')
const setSelectedValue = event => {
      const value = event.target.value;
      setValue(value);
}
function Container(props){
      return <div className="loginContainer">
      <h1>Создать аккаунт</h1>
      <form onSubmit={(e) => { e.preventDefault(); }}>
            <span>
                  <i className="fa fa-user-circle-o"></i>
                  <input type="text" placeholder='Имя пользователя' required />
            </span>
            <span>
                  <i className="fa fa-lock"></i>
                  <input type={show ? "text" : "password"} placeholder='Пароль' required />
                  <i className={`fa ${show ? "fa-eye-slash" : "fa-eye"}`} onClick={togglePasswordVisibility}></i>
            </span>
                  <select value={selectedValue} onChange={setSelectedValue} className='schoolInfo'>
                        <option selected>Название школы</option>
                        <option value="MRJS">Монголия-Российская совместная школа</option>
                  </select>
                  <select value={selectedValue} onChange={setSelectedValue}>
                        <option selected>Класс</option>
                        <CreateClasses/>
                  </select>
            <span className='remember'>
                  <input type="checkbox" id="RememberMe" />
                  <label htmlFor="RememberMe">Запомнить меня?</label>
            </span>
            <button>Зарегистрироваться</button>
            <p className='warning'></p>
      </form>
      <p>Уже есть аккаунт? <span>Войти</span></p>
 </div>
}
export default SignUpPage;