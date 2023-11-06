import { UserStatement } from '../../fixtures/queryDao.json'
import { TiendaNube } from '../../fixtures/queryDao.json'
const format = require('string-format');

class UserDao{

    getDataUser(tipoCuenta){
        cy.sqlServer(format(UserStatement.userInfo, tipoCuenta)).as('dataUser');
    }

    getDenominationByEmail(email){
        cy.sqlServer(format(UserStatement.denominationByEmail, email)).as('dataDenomination');
    }
    
    getDataUserByTypeUser(cuenta, isAvailableBalance, isBalanceReview){
        cy.sqlServer(
            format(UserStatement.userInfoByTypeUser.query, 
                    UserStatement.userInfoByTypeUser.disponible[isAvailableBalance], 
                    UserStatement.userInfoByTypeUser.revision[isBalanceReview], 
                    UserStatement.userInfoByTypeUser.tipoCuenta[cuenta])).as('dataUser');
    }

    getDataUserWithTransactios(isWithTransactions){
        cy.sqlServer(
            format(UserStatement.userInfoWithMovements.query, 
                    UserStatement.userInfoWithMovements.isWithMovements[isWithTransactions])).as('dataUser');
    }

    getStoreTN(storeId){

        cy.sqlServer(format(TiendaNube.storeInfo,storeId)).as('dataStore');

    }
    getMultiStoreTN(storeId_1,storeId_2){

        cy.sqlServer(format(TiendaNube.multiStoreInfo,storeId_1,storeId_2)).as('dataMultiStore');

    }

}

export default UserDao;