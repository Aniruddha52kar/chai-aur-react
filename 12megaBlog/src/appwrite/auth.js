// auth create kar diye aapn nne 

import conf from '../conf.js'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client 
         .setEndpoint(conf.appwriteUrl) // waha ke liye hau env ke pass ke
         .setProject(conf.appwriteProjectId)
         // ye value ko aap ne set kar di hai 
         this.account = new Account(this.client);

    }
    //async is liye use kare hai accout aage nahi jaye ga is liye ye use kara hu  mai
    
    async createAccount({email, password, name}){
        try{ 
             const userAccount = await this.account.create(ID.unique(), email, password, name );
            if (userAccount){
                // call another method 
                return this.login({email, password});
               
            }else{
                return userAccount;
            }
            } catch(error){
            throw error;
        }
    }

    async login ({email, password}){ // login kar ke dekhe ga 
        try {
           return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
            
        }
    }

    async getCurrentUser(){ 
        try {
            await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;
    }

     async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);

            
        }
     }
     // yerah future code here aur ye authentic file hai ye 
}


const authService = new AuthService();

export default AuthService;

// ek to chaiye client aur ek chaiye user







