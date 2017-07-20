package com.qa.cdapi.persistence;

import javax.persistence.Entity;

/**
 * Created by Administrator on 20/07/2017.
 */

@Entity
public class CD {
    private String artistname;
    private String genre;
    private String title;

    public String getArtistname() {
        return artistname;
    }

    public void setArtistname(String artistname) {
        this.artistname = artistname;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
