import React, {useState} from 'react';
import LoginForm from './component/LoginForm';

function App() {
	const adminUser = {
		name:"rohit",
		email: "rroo@gmail.com",
		password: "1234567890",
		phone:  "9876543210"
	}

	const [user, setUser]= useState({name: "",email: "",phone: ""});
	const [error, setError] = useState("");

	const Login = details => {
		console.log(details);
		if( details.name == adminUser.name && details.email == adminUser.email && details.password == adminUser.password && details.phone == adminUser.phone){
			alert("YOU ARE VALID USER");
		
		setUser({
			name: details.name,
			email:details.email,
			phone:details.phone
		});
	}
	else{
		
		setError("Details do not match");
	}
}
	
	return (
		<div className="App">
			{(user.email!= "")? (
				<div className="welcome">
					<h2>hello World</h2>
					
				</div>
				 ) :(
				 <LoginForm  Login={Login} error ={error}/>
				 ) }
				 </div>
		);

}
export default App;