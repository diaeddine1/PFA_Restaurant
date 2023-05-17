package com.example.demo.entities;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class Restaurant {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String nom;
	private String prenom;
	private String adresse;
	private long longitude;
	private long latitude;
	@Temporal(TemporalType.TIME)
	private Date heure_open;
	@Temporal(TemporalType.TIME)
	private Date heure_close;
	
	@JsonIgnore
	@ManyToOne
	private Zone zone;
	@JsonIgnore
	@OneToMany(mappedBy = "restaurant",fetch = FetchType.EAGER)
	private List<Photo> photos;
	@JsonIgnore
	@ManyToMany(mappedBy = "restaurants")
	private List<Specialite> specialites;

	
	
	@ManyToOne
	private Serie serie;
	
	@JsonIgnore
	@OneToMany(mappedBy = "restaurant",fetch=FetchType.EAGER)
	private List<User> users;
	
	@JsonIgnore
	@OneToMany(mappedBy = "restaurant",fetch = FetchType.EAGER)
	private List<Reservation> reservations;

		
	public Restaurant(int id, String nom, String prenom, String adresse, long longitude, long latitude, Date heure_open,
			Date heure_close, Zone zone, List<Photo> photos, List<Specialite> specialites, Serie serie,
			List<User> users, List<Reservation> reservations) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.adresse = adresse;
		this.longitude = longitude;
		this.latitude = latitude;
		this.heure_open = heure_open;
		this.heure_close = heure_close;
		this.zone = zone;
		this.photos = photos;
		this.specialites = specialites;
		this.serie = serie;
		this.users = users;
		this.reservations = reservations;
	}

	

	public List<Specialite> getSpecialites() {
		return specialites;
	}



	public void setSpecialites(List<Specialite> specialites) {
		this.specialites = specialites;
	}



	public List<Reservation> getReservations() {
		return reservations;
	}



	public void setReservations(List<Reservation> reservations) {
		this.reservations = reservations;
	}



	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public long getLongitude() {
		return longitude;
	}

	public void setLongitude(long longitude) {
		this.longitude = longitude;
	}

	public long getLatitude() {
		return latitude;
	}

	public void setLatitude(long latitude) {
		this.latitude = latitude;
	}

	public Date getHeure_open() {
		return heure_open;
	}

	public void setHeure_open(Date heure_open) {
		this.heure_open = heure_open;
	}

	public Date getHeure_close() {
		return heure_close;
	}

	public void setHeure_close(Date heure_close) {
		this.heure_close = heure_close;
	}

	public Zone getZone() {
		return zone;
	}

	public void setZone(Zone zone) {
		this.zone = zone;
	}

	public Serie getSerie() {
		return serie;
	}

	public void setSerie(Serie serie) {
		this.serie = serie;
	}

	public List<Photo> getPhotos() {
		return photos;
	}

	public void setPhotos(List<Photo> photos) {
		this.photos = photos;
	}
	
	
	

	public Restaurant() {
		super();
	}

	
	

}
