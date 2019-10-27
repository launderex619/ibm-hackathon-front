import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { OrdenModel } from 'src/interfaces/OrdenModel';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['Seqn', 'CDate', 'MFGN', 'WIP', 'PSSD', 'STAT', 'PPRL', 'Modelo', 'TWRC', 'CTRY', 'GEO', 'RSSD', 'CRAD', 'Fofin', 'MFSCods', 'CTBFE', 'CTBTotal', 'rev', 'customer', 'Allocation', 'TimeStamp']
  dataSource: MatTableDataSource<OrdenModel>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private rest: RestService) {

  }
  
  ngOnInit() {

    this.rest.getOrdenes().then( resp => {
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.sort = this.sort;
    }).catch( err => {
      console.error(err);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
