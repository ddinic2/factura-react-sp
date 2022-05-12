import React from "react";
import { spfi, SPBrowser, } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/site-users/web";

import "@pnp/sp/items";
import "@pnp/sp/items/get-all";


class Service {

    sp = spfi("http://localhost:8081/").using(SPBrowser());
    constructor(){}
  
     getCurrentUser() {
      return this.sp.web.currentUser()
      .then(res => {
        return res;
      }).catch((e) => {console.log('error', e); return e});
    }
  
    // getList() {
    //   return this.sp.web.lists.getByTitle("RGB").items.getAll().then(results => {
    //     return results;
    //   });
    // }
  
    // getById() {
    //   return this.sp.web.lists.getByTitle("RGB").items.getById(3)().then(results => {
    //     return results;
    //   });
    // }

    getDataFromList(list:string){
        return this.sp.web.lists.getByTitle(list).items.top(5000)().then(results => {
            return results;
        })
    }
}

export default Service;