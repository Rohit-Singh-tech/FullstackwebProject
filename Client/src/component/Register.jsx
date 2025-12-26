import { useRef ,useState,useEffect} from "react";
import { faCheck,faTimes,faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import "./Register.css";





const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';




const Register = () => {
    const userRef = useRef();
    const errRef = useRef();
    const pwdRef = useRef();
    const matchRef = useRef();  
    const [user, setUser] = useState('');
    const [validUser, setValidUser] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        //console.log(result);
        //console.log(user);
        setValidUser(result);
    }, [user]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
     //   console.log(result);
      //  console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd]);

    const userinfo = {  
        name: user,
        password: pwd
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        //if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd); 
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }  
      
        await axios.post("http://localhost:8000/api/user/create", userinfo )
        .then((response) => {
           // console.log(response);
            setSuccess(true);
        })
        .catch (err => console.log(err )) 
         
        }

    return (
        <>{success ? (
            <section  className="success" id="registersection">
                <h1>Success!</h1>
                <p>
                    <a href="./Signin">Sign In</a>
                </p>
            </section>
        ) : (
        <section id="registersection">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Register</h1>
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
                <label htmlFor="confirm_pwd">
                    Confirm Password:
                    <span className={validMatch && matchPwd ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck} /></span>
                    <span className={validMatch || !matchPwd ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes} /></span>
                </label>
                <input
                    type="password"
                    id="confirm_pwd"
                    ref={matchRef}
                    autoComplete="off"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                />
                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must match the first password input field.
                </p>
                <button disabled={!validUser || !validPwd || !validMatch ? true : false}>Sign Up</button>
                </form>
                <p>  Already registered?<br />
                <span className="line">
                    {/*put router link here*/}
                    <a href="./Signin">Sign In</a>
                </span>
                </p>
        </section>
        )};
        </>
    );
}
export default Register;