import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
	private _url = "http://jsonplaceholder.typicode.com/users";

	constructor(private _http: HttpClient){
	}

	getUsers(){
		return this._http.get(this._url).pipe(map((res: any[]) => res));
	}
    
    getUser(userId){
		return this._http.get(this.getUserUrl(userId)).pipe(map((res: any[]) => res));
	}
    
    addUser(user){
		return this._http.post(this._url, JSON.stringify(user)).pipe(map((res: any[]) => res));
	}
    
    updateUser(user){
		return this._http.put(this.getUserUrl(user.id), JSON.stringify(user)).pipe(map((res: any[]) => res));
	}
    
    deleteUser(userId){
		return this._http.delete(this.getUserUrl(userId)).pipe(map((res: any[]) => res));
	}
    
    private getUserUrl(userId){
		return this._url + "/" + userId;
	}
}