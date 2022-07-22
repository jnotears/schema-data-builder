import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ModuleService{
  apikey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrcWpub2FvbXF2b3pjY3l3bXNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgwNzU1OTAsImV4cCI6MTk3MzY1MTU5MH0.chuk9tNSSNNAIlMv5DN2Dk3n8QZZuEkisQLMT6s5GIA`;
  constructor(
    private readonly http: HttpClient
  ) {
  }

  getModules(){
    const opts = new HttpHeaders().set('apikey', this.apikey);
    return this.http.get(`https://fkqjnoaomqvozccywmsq.supabase.co/rest/v1/module?select=*`, {headers: opts});
  }

  getModuleData(id: number){
    const opts = new HttpHeaders().set('apikey', this.apikey);
    return this.http.post(`https://fkqjnoaomqvozccywmsq.functions.supabase.co/module-r`, {module_id: id}, {headers: opts});
  }

  creatModuleData(data: any){
    const opts = new HttpHeaders().set('apikey', this.apikey);
    return this.http.post(`https://fkqjnoaomqvozccywmsq.functions.supabase.co/module-c`, data, {headers: opts});
  }
}
