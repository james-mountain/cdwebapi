package com.qa.cdapi.business;

import com.qa.cdapi.persistence.CD;
import com.qa.cdapi.util.JSONUtil;

import javax.ejb.Stateless;
import javax.enterprise.inject.Default;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.Collection;

/**
 * Created by Administrator on 20/07/2017.
 */
@Stateless
@Default
public class CDServiceDBImpl implements CDService {

    @PersistenceContext(unitName = "primary")
    private EntityManager entityManager;

    @Inject
    private JSONUtil json;

    @Override
    public String retrieveCDs() {
        Query query = entityManager.createQuery("Select c FROM CD c");
        Collection<CD> cds = (Collection<CD>) query.getResultList();
        return json.getJSONForObject(cds);
    }

    @Override
    public String createNewCD(String cdJSON) {
        CD newCD = json.getObjectForJSON(cdJSON, CD.class);
        entityManager.persist(newCD);
        return "CD added";
    }

    @Override
    public String deleteCD(long ID) {
        CD databaseCD = entityManager.find(CD.class, ID);
        if (databaseCD != null) {
            entityManager.remove(databaseCD);
        }
        return "CD removed";
    }

    @Override
    public String retrieveCD(long ID) {
        Query query = entityManager.createQuery("Select c FROM CD c WHERE id=:ID");
        query.setParameter("ID", ID);
        Collection<CD> cds = (Collection<CD>) query.getResultList();
        return json.getJSONForObject(cds);
    }

    @Override
    public String updateCD(long ID, String cdJSON) {
        CD newCD = json.getObjectForJSON(cdJSON, CD.class);
        CD databaseCD = entityManager.find(CD.class, ID);
        if (databaseCD != null) {
            databaseCD = newCD;
            entityManager.merge(databaseCD);
        }
        return "CD updated";
    }

    @Override
    public String deleteAllCDs() {
        Query query = entityManager.createQuery("DELETE FROM CD");
        query.executeUpdate();
        return "All CDS deleted";
    }
}
