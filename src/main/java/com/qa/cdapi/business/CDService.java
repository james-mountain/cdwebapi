package com.qa.cdapi.business;

/**
 * Created by Administrator on 20/07/2017.
 */
public interface CDService {
    String retrieveCDs();
    String createNewCD(String cdJSON);
    String deleteCD(long ID);
}
