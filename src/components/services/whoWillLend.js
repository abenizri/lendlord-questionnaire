//unsupported lenders
// "Pepper":
//   [{"landlordLending": "Yes",
//   "maxNumberOfPropertiesWithLender": 3,
//   "overallLenderExposure": 3000000,
//   "minimumIncome": 18000}],
// "Gatehouse":
//   [{"landlordLending": "Yes",
//   "overallLenderExposure": 5000000,
//   "minimumIncome": 20000}],
// "Paragon":
//   [{"landlordLending": "Yes",
//   "overallLenderExposure": 5000000}],
// "Kensington":
//   [{"landlordLending": "Yes",
//   "maxLTV": 75,
//   "overallLenderExposure": 2000000,
//   "overallExposure": 2000000}],
// "Newcastle":
//   [{"landlordLending": "Yes",
//   "maxNumberOfProperties": 3,
//   "maxNumberOfPropertiesWithLender": 3,
//   "maxLTV": 75,
//   "overallLenderExposure": 1000000}],
// "Fleet":
//   [{"landlordLending": "Yes",
//   "maxLTV": 75,
//   "overallLenderExposure": 5000000,
//   "minimumIncome": 15000}],


const lenderRules = {
  "The Mortgage Works":
    [{"landlordLending": "Yes",
    "maxNumberOfProperties": 10,
    "maxLTV": 75,
    "overallLenderExposure": 5000000},
    {"landlordLending": "Yes",
    "minNumberOfProperties": 11,
    "maxLTV": 65,
    "overallLenderExposure": 5000000}],
  "Barclays":
    [{"landlordLending": "Yes",
    "maxNumberOfProperties": 10,
    "maxNumberOfPropertiesWithLender": 6,
    "maxLTV": 75,
    "overallLenderExposure": 3000000,
    "overallExposure": 4500000,
    "minimumIncome": 25000}],
  "Coventry":
    [{"landlordLending": "Yes",
    "maxNumberOfProperties": 10,
    "maxNumberOfPropertiesWithLender": 5,
    "maxLTV": 65,
    "overallLenderExposurePerProperty": 500000,
    "overallExposure": 4500000,
    "minimumIncome": 30000}],
  "Virgin Money":
    [{"landlordLending": "Yes",
    "maxNumberOfProperties": 10,
    "maxNumberOfPropertiesWithLender": 5,
    "maxLTV": 75,
    "overallLenderExposure": 3000000}],
  "Santander":
    [{"landlordLending": "Yes",
    "maxNumberOfProperties": 10,
    "maxNumberOfPropertiesWithLender": 3}],
  "BM Solutions":
    [{"landlordLending": "Yes",
    "maxNumberOfProperties": 10,
    "maxNumberOfPropertiesWithLender": 3,
    "maxLTV": 75,
    "overallLenderExposure": 2000000,
    "minimumIncome": 30000}],
  "Precise Mortgages":
    [{"landlordLending": "Yes",
    "maxNumberOfPropertiesWithLender": 20,
    "overallLenderExposure": 10000000}],
  "Leeds Building Society":
    [{"landlordLending": "Yes",
    "maxNumberOfProperties": 10,
    "maxNumberOfPropertiesWithLender": 4,
    "maxLTV": 70}],
  "Aldermore":
    [{"landlordLending": "Yes"}],
  "The Mortgage Lender":
    [{"landlordLending": "Yes",
    "overallLenderExposure": 2500000}],
  "Kent Reliance":
    [{"landlordLending": "Yes",
    "overallLenderExposure": 3000000}]
}
let deniedLenders = {}
let info = {}
// const dummyInfo = {
//   "isLandLord": "Yes",
//   "numOfProperties": 10,
//   "moreThan3PropWithLender": "Yes",
//   "lender": "Newcastle",
//   "totalMortgagesBalanceForLender": 3001000,
//   "ltv": 70,
//   "newMortgageInteresed": "Yes",
//   "propertyValue": 400000,
//   "propertyEstimatedRentalIncome": 1200,
//   "loanValue": 275000,
//   "incomeTaxBand": 20
// }
export function whoWillLend(information) {
  info = information
  transformInformation()
  // console.log(info)
  const lenders = Object.keys(lenderRules)
  let lendersWhoLend = []
  for(let lender of lenders) {
    let willHeLend = false
    let rules = lenderRules[lender]
    for(let ruleSet of rules) {
      if(willLend(lender, ruleSet)) {
        willHeLend = true
      }
    }
    if(willHeLend) lendersWhoLend.push(lender)
  }
  // console.log(state.deniedLenders)
  // console.log(lendersWhoLend)
  return { validLenders: lendersWhoLend, deniedMessages: deniedLenders }
}

  // this will construct all the reasons to deny a mortgage, even if the lender is not denied (TMW that have two sets of rules)
  // post the message only if the lender is denied.
function constructMessageAccordingToRule(lender, rule, ruleValue) {
  switch(rule) {
    case "landlordLending":
      return "You are a landlord";
    case "maxNumberOfProperties":
      return "number of properties is higher than " + ruleValue;
    case "maxLTV":
      return "Portfolio LTV is higher than " + ruleValue + "%"
    case "maxNumberOfPropertiesWithLender":
      return "More than " + ruleValue + " properties with " + lender
    case "minNumberOfProperties":
      return
    case "overallLenderExposure":
      return "Lender exposure more than " + ruleValue
    case "overallLenderExposurePerProperty":
      return
    case "overallExposure":
      return
    case "minimumIncome":
      return "Minimum income is lower than " + ruleValue
    default:
      return
  }
}

function transformInformation() {
  info.numOfProperties = parseInt(info.numOfProperties)
  info.totalMortgagesBalanceForLender = parseInt(info.totalMortgagesBalanceForLender)
  info.ltv = parseInt(info.ltv)
  info.moreThan3PropWithLender = info.lender === "" ? "No" : "Yes"
  info.minimumIncome = mapMinimumIncome(info.minimumIncome)
}

function mapMinimumIncome(val) {
  switch(val) {
    case '0':
      return 15000
    case '25':
      return 18000
    case '50':
      return 20000
    case '75':
      return 25000
    case '100':
      return 30000
    default:
      return 0
  }
}

function willLend(lender, rules, denyMessages = deniedLenders) {
  let willHeLend = true
  for(let rule in rules) {
    let ruleValue = rules[rule]
    if(ruleIsTrue(lender, rule, ruleValue) !== true) {
      willHeLend = false
      if(!denyMessages[lender]) denyMessages[lender] = {}
      let message = constructMessageAccordingToRule(lender, rule, ruleValue)
      if(message) {
        denyMessages[lender][rule] = message
      }
    }
  }

  deniedLenders = denyMessages
  return willHeLend
}

function ruleIsTrue(lender, rule, ruleValue) {
  switch(rule) {
    case "landlordLending":
      return willLendIfLandlord(ruleValue);
    case "maxNumberOfProperties":
      return willLendIfMaxNumberOfProperties(ruleValue);
    case "maxLTV":
      return willLendIfMaxLTV(ruleValue);
    case "maxNumberOfPropertiesWithLender":
      return willLendIfMaxNumberOfPropertiesWithLender(lender, ruleValue)
    case "minNumberOfProperties":
      return willLendIfMinNumberOfProperties(ruleValue)
    case "overallLenderExposure":
      return willLendOverallLenderExposure(lender, ruleValue)
    case "overallLenderExposurePerProperty":
      return true
    case "overallExposure":
      return willLendOverallExposure(ruleValue)
    case "minimumIncome":
      return willLendMinimumIncome(ruleValue)
    default:
    return true
  }
}

function willLendMinimumIncome(ruleValue) {
  return info["minimumIncome"] < ruleValue ? false : true
}

function willLendIfLandlord(ruleValue) {
  return info["isLandLord"] === ruleValue ? true : false
}

function willLendIfMaxNumberOfProperties(ruleValue) {
  return info["numOfProperties"] > ruleValue ? false : true
}

function willLendIfMinNumberOfProperties(ruleValue) {
  return info["numOfProperties"] < ruleValue ? false : true
}

function willLendIfMaxLTV(ruleValue) {
  return info["ltv"] > ruleValue ? false : true
}

function willLendIfMaxNumberOfPropertiesWithLender(lender, ruleValue) {
  return info["lender"] === lender && 3 >= ruleValue ? false : true
}

function willLendOverallLenderExposure(lender, ruleValue) {
  return info["lender"] === lender && info["totalMortgagesBalanceForLender"] > ruleValue ? false : true
}

function willLendOverallExposure(ruleValue) {
  return info["overallExposure"] > ruleValue ? false : true
}
