import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('login')
export class LoginController {
	@Get()
	public test(){
	return "Complete";
	}

	@Post()
	public login(@Body("username") username, @Body("password") password){
		if(username==="n8" && password==="pw"){
			return "gay";
		}
		else{
			return "OOGA BOOGA MY D00D";
		}
	}
}
