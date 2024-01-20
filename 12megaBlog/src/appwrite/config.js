import conf from '../conf.js'
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client 
        .setEndpoint(conf.appwriteUrl) // waha ke liye hau env ke pass ke
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    async createPost({title, slug, content, featuredImage, status, userId }){

        // futured imag kya hai is ke liye method bane ga 
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, 
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                    
                }// ye sab ho gya create post
            )

        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error );

        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
           return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
            }
        )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error)
        }

    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
              return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false

        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                
            )
        } catch (error) {
            console.log("appwrite serive :: getPosts :: error",error)
            return false 
            
        }
    }

    //file upload services / methods

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
                )
                return true
            
        } catch (error) {
            console.log("App write serive :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}



const service = new Service()
export default Service 
