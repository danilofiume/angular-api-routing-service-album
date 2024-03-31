import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../../service/albums.service';
import { IAlbum, IAlbumDetails } from '../../model/interface';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albums: IAlbum[];
  albumDetails: IAlbumDetails[];
  showAlbumList: boolean = true;
  selectedAlbumId: number;

  constructor(private albumsService: AlbumsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(data => {
      this.albums = data;
    });
  }

  // Metodo per mostrare i dettagli dell'album
  showAlbumDetails(albumId: number): void {
    this.albumsService.getAlbumId(albumId).subscribe(data => {
      this.albumDetails = data;
      this.selectedAlbumId = albumId;
      this.showAlbumList = false; // Nasconde la lista degli album
    });
  }

  // Metodo per tornare alla lista degli album
  showAlbumListAgain(): void {
    this.showAlbumList = true; // Mostra nuovamente la lista degli album
  }
}
