"use strict";

(function (core) {
    class Router {
        constructor() {
            this.m_activeLink = "";
        }

        get ActiveLink() {
            return this.m_activeLink;
        }

        set ActiveLink(link) {
            this.m_activeLink = link;
        }

        /**
         * adds a new route to the table
         *
         * @param {*} route
         * @memberof Router
         */
        Add(route) {
            this.m_routingTable.push(route);
        }

        /**
         * replace current table with a new table
         *
         * @param {*} routingTable
         * 
         * @memberof Router
         */
        AddTable(routingTable) {
            this.m_routingTable = routingTable;
        }

        /**
         *find the index of the route in the routing table
         *returns -1 if no index found
         *
         * @param {*} route
         * @return {int} route
         * @memberof Router
         */
        Find(route) {
            return this.m_routingTable.indexOf(route);
        }

        /**
         *remove an index of a routing table if it is found
         *returns true if the index was removed, false if no index was found
         *
         * @param {*} route
         * @return {boolean} 
         * @memberof Router
         */
        Remove(route) {
            if (this.Find(route) > -1) {
                this.m_routingTable.splice(this.Find(route), 1);
                return true;
            }
            return false;
        }

        ToString(){
            return this.m_routingTable.toString()
        }
    }
    core.Router = Router;
})(core || (core = {}));

let router = new core.Router();
router.AddTable([
                    "/",
                    "/home",
                    "/about",
                    "/services",
                    "/contact",
                    "/contact-list",
                    "/projects",
                    "/register",
                    "/login",
                    "/edit",
                ]);