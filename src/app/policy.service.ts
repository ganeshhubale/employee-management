import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  SERVER_URL: string = "http://localhost:4200/api/";
  constructor(private httpClient: HttpClient) { }

  public getEmployees(){ 
       return this.httpClient.get(this.SERVER_URL + 'emp');
  }

  public getEmployee(empId: number){
       return this.httpClient.get(`${this.SERVER_URL + 'emp'}/${empId}`); 
  }
  public createEmployee(emp: {id: number, name: string, worklocation: string, mobile: number}){
      return this.httpClient.post(`${this.SERVER_URL + 'emp'}`, emp)
  }

  public deleteEmployee(empId: number){
      return this.httpClient.delete(`${this.SERVER_URL + 'emp'}/${empId}`)
  }
  public updateEmployee(emp: {id: number, name: string, worklocation: string, mobile: number}){
      return this.httpClient.put(`${this.SERVER_URL + 'emp'}/${emp.id}`, emp)
  }

}
