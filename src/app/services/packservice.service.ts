import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Package {
  packageId: number;
  title: string;
  description: string;
  duration: number;
  price: number;
  includedServices: string;
  travelagent:string;
  image:string;
}

@Injectable({
  providedIn: 'root'
})
export class PackserviceService {
  private apiUrl = 'https://localhost:7117/api/Package'; 
  // // Replace with actual backend API
   


  constructor(private http: HttpClient) {}

  addPackage(packageData: Package): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, packageData);
  }

  getAllPackages(): Observable<Package[]> {
    return this.http.get<Package[]>(`${this.apiUrl}`);
  }

  getPackageByTitle(title: string): Observable<Package[]> {
    return this.http.get<Package[]>(`${this.apiUrl}/title/${title}`);
  }

  getPackageById(packageId: number): Observable<Package> {
    return this.http.get<Package>(`${this.apiUrl}/${packageId}`);
  }

  getPackageByPriceRange(minPrice: number, maxPrice: number): Observable<Package[]> {
    return this.http.get<Package[]>(`${this.apiUrl}/price-range/${minPrice}/${maxPrice}`);
  }

  getPackageByDuration(duration: number): Observable<Package[]> {
    return this.http.get<Package[]>(`${this.apiUrl}/duration/${duration}`);
  }

  getPackageByTravelAgent(travelAgentId: number): Observable<Package[]> {
    return this.http.get<Package[]>(`${this.apiUrl}/travel-agent/${travelAgentId}`);
  }

  getPackageByCategory(category: string): Observable<Package[]> {
    return this.http.get<Package[]>(`${this.apiUrl}/category/${category}`);
  }

  updatePackage(packageId: number, updatedData: Partial<Package>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${packageId}`, updatedData);
  }

  deletePackage(packageId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${packageId}`);
  }
}
