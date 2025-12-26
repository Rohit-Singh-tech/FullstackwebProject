import { useRef ,useState,useEffect} from "react";
import { faCheck,faTimes,faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
//import "./Register.css";
import { useParams } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const SIGNIN_URL = '/signin';



const Update = () => {
    const userRef = useRef();
    const errRef = useRef();
    const pwdRef = useRef(); 
    const [user, setUser] = useState('');
    const [validUser, setValidUser] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);


    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
       // console.log(result);
        //console.log(user);
        setValidUser(result);
    }, [user]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        //console.log(result);
       // console.log(pwd);
        setValidPwd(result);
       
    }, [pwd]);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const {id} = useParams();

    useEffect(() => {
        const  fetchData = async () => {
            const response = await axios.get(`http://localhost:8000/api/user/getOneUser/${id}` )
           setUser(response.data.name);
           setPwd(response.data.password);
          //
          console.log(response.data);
                 }
                 fetchData();
            }, [id]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
      await axios.put(`http://localhost:8000/api/user/update/${id}`,{name:user,password:pwd} )
      .then((response) => {
        window.location.href="/component/Admin";
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
    } ;  
    
    return (
        <>{success ? (
            <section>
                <h1>USER IS SUCESSFULLY UPDATED!</h1>
                <p>
                    <a href="/">Home</a>
                </p>
            </section>
        ) : (
        <section id="registersection">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Update</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username:
                    <span className={validUser ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validUser || !user ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                    </label>
                <input
                    type="text"
                    id="username"
                    value={user}
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    aria-invalid={validUser ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                    
                />
                <p id="uidnote" className={userFocus && user && !validUser ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores, hyphens allowed.
                </p> 
                <label htmlFor="password">
                    Password:
                    <span className={validPwd ? "valid" : "hide"}>  <FontAwesomeIcon icon={faCheck} /></span>
                    <span className={validPwd || !pwd ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes} /></span>
                </label>
                <input
                    type="password"
                    id="password"
                    value={pwd}
                    ref={pwdRef}
                    autoComplete="off"
                    onChange={(e) => setPwd(e.target.value)}
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                />
                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number and a special character.<br />
                    Allowed special characters: ! @ # $ % 
                </p>
              
                <button disabled={!validUser || !validPwd  ? true : false}>update</button>
                </form>
              
        </section>
        )};
        </>
    );
}
export default Update;