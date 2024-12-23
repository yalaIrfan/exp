// import { loadTest } from 'loadtest';
const { loadTest } = require('loadtest');
const body = {
    "limitId1": "LIM1",
    "description": "Limit parent Updated",
    "limitType": "CUST",
    "limitTypeId": "CIF1",
    "limitSubType": null,
    "projectCode": null,
    "parenId": "",
    "limitStatus": "ACTIVATED",
    "globalLimit": false,
    "parentId": "",
    "parentLimitReference": "",
    "parentFacilityType": null,
    "businessEntity": [
        "DFBANK1"
    ],
    "riskTaker": null,
    "businessUnit": null,
    "riskType": null,
    "facilityType": "CCA",
    "facilityRiskRating": null,
    "facilityRiskRatingDate": null,
    "fungibleLimit": true,
    "advisedLimit": false,
    "revolving": "Y",
    "trueNature": "Y",
    "committed": false,
    "committedFlag": "NA",
    "limitCurrency": "AED",
    "proposedLimit": {
        "value": "1000000.00",
        "ccy": "AED"
    },
    "proposedDate": "2024-08-20T00:00:00.000Z",
    "approvedLimit": {
        "value": "1000000.00",
        "ccy": "AED"
    },
    "approvedDate": "2024-07-25T00:00:00.000Z",
    "originalExpiryDate": "2025-06-26T00:00:00.000Z",
    "extendedExpiryDate": null,
    "extensionCount": 0,
    "extensionReason": null,
    "secondaryLimit": false,
    "sanctionAuthority": null,
    "sanctionLevel": null,
    "approvalRefNo": "KEY_123",
    "activatedLimit": {
        "value": "1000000.00",
        "ccy": "AED"
    },
    "activatedDate": "2024-10-01T00:00:00.000Z",
    "contractSignDate": null,
    "limitEffectiveDate": "2024-08-20T00:00:00.000Z",
    "tenorYears": 0,
    "tenorMonths": 0,
    "tenorDays": 0,
    "limitExpiryDate": "2025-06-26T00:00:00.000Z",
    "limitAvailabilityEndDate": "2024-10-01T00:00:00.000Z",
    "limitReviewDate": "2024-11-01T00:00:00.000Z",
    "drawingLimitIndicator": "E",
    "drawingLimitPercentage": 0,
    "drawingLimit": "100000.00",
    "remarks": null,
    "tenorBucket": null,
    "limitCategory": [
        {
            "categoryType": "UCCY",
            "categoryId": "AED",
            "description": "Auto populated value at the time of limit creation"
        },
        {
            "categoryType": "CUST",
            "categoryId": "CIF1",
            "description": "Auto populated value at the time of limit creation"
        }
    ],
    "wfStatus": "FINAL",
    "_status": "",
    "_transactionType": "",
    "_delta": {},
    "freezeUnfreezeReason": null,
    "freezeExpiryDate": null,
    "autoTenorExposureMovement": "N",
    "activeTemporaryLimit": {
        "value": "0",
        "ccy": "AED"
    },
    "effectiveActivatedLimit": {
        "value": "100000.00",
        "ccy": "AED"
    },
    "_verifiedBy": null,
    "_modifiers": null,
    "limitClosureReason": null,
    "gradLimitActive": false,
    "isContigentAccoutingRequired": false,
    "netLimitApplicable": false,
    "netActivatedLimit": {
        "value": "0",
        "ccy": "AED"
    },
    "isIntraDayLimit": false,
    "applicableDimensions": [],
    "activeTempLimFromChild": "0",
    "revaluationRequired": "YES",
    "supplierLimit": false,
    "supplierLevel": null,
    "profitRtCdflag": false,
    "profitratecode": null,
    "minprofitPer": 0,
    "maxprofitPer": 0,
    "accountpreferentialrate": null,
    "downpayment": false,
    "downpaymentType": null,
    "downpaymentMoneyType": null,
    "downpaymentPer": 0,
    "downpaymentAmount": {
        "value": "0",
        "ccy": "AED"
    },
    "marginCollection": null,
    "marginType": null,
    "marginMoneyType": null,
    "marginPer": 0,
    "marginAmount": {
        "value": "0",
        "ccy": "AED"
    },
    "equatedinstallment": null,
    "repaymentFrequency": null,
    "profitrateformula": null,
    "MPBFPer": 0,
    "margincall1Per": 0,
    "margincall2Per": 0,
    "liquidationCallPer": 0,
    "financeValuetoPer": 0,
    "aedDrawdownDays": 0,
    "aedDrawdownMonths": 0,
    "intradayPerFlag": false,
    "aedDrawdownYears": 0,
    "expiryDrawdownMonths": 0,
    "expiryDrawdownDays": 0,
    "expiryDrawdownYears": 0,
    "financePrDays": "0",
    "financePrMonths": "0",
    "overdueStatus": null,
    "minReqCollateralPercnt": 0,
    "patternOfFunding": null,
    "esg": "N",
    "riskOfCountry": null,
    "bankFinancingType": null,
    "coolingPeriod": null,
    "minDrawdownAmt": null,
    "countryOfRisk": null,
    "noOfPermittedDrawdowns": null,
    "commitmentPeriod": null,
    "eFacility": false,
    "sFacility": false,
    "gFacility": false,
    "intraDayLimitAccounts": null,
    "termsConditions": {
        "msg": "h gg h"
    },
    "earliestFlag": false,
    "auditLinkId": "3b37105f-fb09-4c0d-984f-54ae008cebd3",
    "bankEntityId": "DFBANK1",
    "effectiveDrawingLimit": "100000.00",
    "sup": []
};

// http://{{localhost}}:{{port}}/limits/api/limits -H "Authorization: oJehSVzbUNidM7D9GbqVVwd8oEPy2OBtAlvyRqzfYGQvJEHeCIGg1NIsYrFIgvUG"
const options = {
    url: 'http://localhost:8082/limits/api/limits',
    maxRequests: 100,
    method: 'POST',
    concurrency: 5,
    headers: {'Authorization': 'oJehSVzbUNidM7D9GbqVVwd8oEPy2OBtAlvyRqzfYGQvJEHeCIGg1NIsYrFIgvUG'},
    contentType: 'application/json',
    body
}
 loadTest(options).then((result)=>{
    result.show()
    console.log('Tests run successfully');
}).catch((error)=>{console.error('Ooops something wrong !!')});


/**
 * command to run the test
 * 
.\node_modules\.bin\loadtest -n 10 -c 2 --rps 20 --contentType application/json --postBody 
"{\"limitId1\":\"LIM1\",\"description\":\"Limit parent Updated\",\"limitType\":\"CUST\",\"limitTypeId\":\"CIF1\",\"limitSubType\":null,\"projectCode\":null,\"parenId\":\"\",\"limitStatus\":\"ACTIVATED\",\"globalLimit\":false,\"parentId\":\"\",\"parentLimitReference\":\"\",\"parentFacilityType\":null,\"businessEntity\":[\"DFBANK1\"],\"riskTaker\":null,\"businessUnit\":null,\"riskType\":null,\"facilityType\":\"CCA\",\"facilityRiskRating\":null,\"facilityRiskRatingDate\":null,\"fungibleLimit\":true,\"advisedLimit\":false,\"revolving\":\"Y\",\"trueNature\":\"Y\",\"committed\":false,\"committedFlag\":\"NA\",\"limitCurrency\":\"AED\",\"proposedLimit\":{\"value\":\"1000000.00\",\"ccy\":\"AED\"},\"proposedDate\":\"2024-08-20T00:00:00.000Z\",\"approvedLimit\":{\"value\":\"1000000.00\",\"ccy\":\"AED\"},\"approvedDate\":\"2024-07-25T00:00:00.000Z\",\"originalExpiryDate\":\"2025-06-26T00:00:00.000Z\",\"extendedExpiryDate\":null,\"extensionCount\":0,\"extensionReason\":null,\"secondaryLimit\":false,\"sanctionAuthority\":null,\"sanctionLevel\":null,\"approvalRefNo\":\"KEY_123\",\"activatedLimit\":{\"value\":\"1000000.00\",\"ccy\":\"AED\"},\"activatedDate\":\"2024-10-01T00:00:00.000Z\",\"contractSignDate\":null,\"limitEffectiveDate\":\"2024-08-20T00:00:00.000Z\",\"tenorYears\":0,\"tenorMonths\":0,\"tenorDays\":0,\"limitExpiryDate\":\"2025-06-26T00:00:00.000Z\",\"limitAvailabilityEndDate\":\"2024-10-01T00:00:00.000Z\",\"limitReviewDate\":\"2024-11-01T00:00:00.000Z\",\"drawingLimitIndicator\":\"E\",\"drawingLimitPercentage\":0,\"drawingLimit\":\"100000.00\",\"remarks\":null,\"tenorBucket\":null,\"limitCategory\":[{\"categoryType\":\"UCCY\",\"categoryId\":\"AED\",\"description\":\"Auto populated value at the time of limit creation\"},{\"categoryType\":\"CUST\",\"categoryId\":\"CIF1\",\"description\":\"Auto populated value at the time of limit creation\"}],\"wfStatus\":\"FINAL\",\"_status\":\"\",\"_transactionType\":\"\",\"_delta\":{},\"freezeUnfreezeReason\":null,\"freezeExpiryDate\":null,\"autoTenorExposureMovement\":\"N\",\"activeTemporaryLimit\":{\"value\":\"0\",\"ccy\":\"AED\"},\"effectiveActivatedLimit\":{\"value\":\"100000.00\",\"ccy\":\"AED\"},\"_verifiedBy\":null,\"_modifiers\":null,\"limitClosureReason\":null,\"gradLimitActive\":false,\"isContigentAccoutingRequired\":false,\"netLimitApplicable\":false,\"netActivatedLimit\":{\"value\":\"0\",\"ccy\":\"AED\"},\"isIntraDayLimit\":false,\"applicableDimensions\":[],\"activeTempLimFromChild\":\"0\",\"revaluationRequired\":\"YES\",\"supplierLimit\":false,\"supplierLevel\":null,\"profitRtCdflag\":false,\"profitratecode\":null,\"minprofitPer\":0,\"maxprofitPer\":0,\"accountpreferentialrate\":null,\"downpayment\":false,\"downpaymentType\":null,\"downpaymentMoneyType\":null,\"downpaymentPer\":0,\"downpaymentAmount\":{\"value\":\"0\",\"ccy\":\"AED\"},\"marginCollection\":null,\"marginType\":null,\"marginMoneyType\":null,\"marginPer\":0,\"marginAmount\":{\"value\":\"0\",\"ccy\":\"AED\"},\"equatedinstallment\":null,\"repaymentFrequency\":null,\"profitrateformula\":null,\"MPBFPer\":0,\"margincall1Per\":0,\"margincall2Per\":0,\"liquidationCallPer\":0,\"financeValuetoPer\":0,\"aedDrawdownDays\":0,\"aedDrawdownMonths\":0,\"intradayPerFlag\":false,\"aedDrawdownYears\":0,\"expiryDrawdownMonths\":0,\"expiryDrawdownDays\":0,\"expiryDrawdownYears\":0,\"financePrDays\":\"0\",\"financePrMonths\":\"0\",\"overdueStatus\":null,\"minReqCollateralPercnt\":0,\"patternOfFunding\":null,\"esg\":\"N\",\"riskOfCountry\":null,\"bankFinancingType\":null,\"coolingPeriod\":null,\"minDrawdownAmt\":null,\"countryOfRisk\":null,\"noOfPermittedDrawdowns\":null,\"commitmentPeriod\":null,\"eFacility\":false,\"sFacility\":false,\"gFacility\":false,\"intraDayLimitAccounts\":null,\"termsConditions\":{\"msg\":\"h gg h\"},\"earliestFlag\":false,\"auditLinkId\":\"3b37105f-fb09-4c0d-984f-54ae008cebd3\",\"bankEntityId\":\"DFBANK1\",\"effectiveDrawingLimit\":\"100000.00\",\"sup\":[]}" http://localhost:8082/limits/api/limits -H "Authorization: oJehSVzbUNidM7D9GbqVVwd8oEPy2OBtAlvyRqzfYGQvJEHeCIGg1NIsYrFIgvUG"
 */