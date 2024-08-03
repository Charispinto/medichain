// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MedicineSupplyChain {

    // Struct to represent a medicine
    struct Medicine {
        string name;
        uint256 quantity;
        uint256 timestamp;
    }

    // Arrays to store medicines for each role
    Medicine[] public newMedArr; // Medicines available for purchase by retailers
    Medicine[] public custArr;   // Medicines available for purchase by customers
    Medicine[] public purchasedMedArr; // Medicines purchased by customers
    Medicine[] public reqArr;    // Requested medicines by customers

    // Events to emit when actions are performed
    event NewMedicineAdded(string name, uint256 quantity, uint256 timestamp);
    event MedicineBoughtByRetailer(string name, uint256 quantity, uint256 timestamp);
    event MedicineBoughtByCustomer(string name, uint256 quantity, uint256 timestamp);
    event MedicineRequested(string name, uint256 quantity, uint256 timestamp);

    // Function for Manufacturer to add new medicines
    function addNewMed(string memory medName, uint256 medQuant) public {
        bool found = false;
        for (uint256 i = 0; i < newMedArr.length; i++) {
            if (keccak256(abi.encodePacked(newMedArr[i].name)) == keccak256(abi.encodePacked(medName))) {
                newMedArr[i].quantity += medQuant;
                newMedArr[i].timestamp = block.timestamp;
                emit NewMedicineAdded(medName, newMedArr[i].quantity, newMedArr[i].timestamp);
                found = true;
                break;
            }
        }
        if (!found) {
            newMedArr.push(Medicine(medName, medQuant, block.timestamp));
            emit NewMedicineAdded(medName, medQuant, block.timestamp);
        }
    }

    // Function for Manufacturer and Retailer to view all new medicines
    function getNewMed() public view returns (Medicine[] memory) {
        return newMedArr;
    }

    function buyNewMed(string memory medName, uint256 medQuant) public {
        bool found = false;
        for (uint256 i = 0; i < newMedArr.length; i++) {
            if (keccak256(abi.encodePacked(newMedArr[i].name)) == keccak256(abi.encodePacked(medName)) && newMedArr[i].quantity >= medQuant) {
                newMedArr[i].quantity -= medQuant;
                newMedArr[i].timestamp = block.timestamp;
                if (newMedArr[i].quantity == 0) {
                    newMedArr[i] = newMedArr[newMedArr.length - 1];
                    newMedArr.pop();
                }
                bool existsInCustArr = false;
                for (uint256 j = 0; j < custArr.length; j++) {
                    if (keccak256(abi.encodePacked(custArr[j].name)) == keccak256(abi.encodePacked(medName))) {
                        custArr[j].quantity += medQuant;
                        custArr[j].timestamp = block.timestamp;
                        existsInCustArr = true;
                        break;
                    }
                }
                if (!existsInCustArr) {
                    custArr.push(Medicine(medName, medQuant, block.timestamp));
                }
                emit MedicineBoughtByRetailer(medName, medQuant, block.timestamp);
                found = true;
                break;
            }
        }
        require(found, "Medicine not found or insufficient quantity");
    }

    // Function for Customer to view all medicines in custArr
    function viewAllMed() public view returns (Medicine[] memory) {
        return custArr;
    }

    // Function for Customer to buy medicines from custArr
    function buyMed(string memory medName, uint256 medQuant) public {
        bool found = false;
        for (uint256 i = 0; i < custArr.length; i++) {
            if (keccak256(abi.encodePacked(custArr[i].name)) == keccak256(abi.encodePacked(medName)) && custArr[i].quantity >= medQuant) {
                custArr[i].quantity -= medQuant;
                custArr[i].timestamp = block.timestamp;
                if (custArr[i].quantity == 0) {
                    custArr[i] = custArr[custArr.length - 1];
                    custArr.pop();
                }
                purchasedMedArr.push(Medicine(medName, medQuant, block.timestamp));
                emit MedicineBoughtByCustomer(medName, medQuant, block.timestamp);
                found = true;
                break;
            }
        }
        require(found, "Medicine not found or insufficient quantity");
    }

    // Function to request a medicine
    function requestMed(string memory medName, uint256 medQuant) public {
        bool found = false;
        for (uint256 i = 0; i < reqArr.length; i++) {
            if (keccak256(abi.encodePacked(reqArr[i].name)) == keccak256(abi.encodePacked(medName))) {
                reqArr[i].quantity += medQuant;
                reqArr[i].timestamp = block.timestamp;
                emit MedicineRequested(medName, reqArr[i].quantity, reqArr[i].timestamp);
                found = true;
                break;
            }
        }
        if (!found) {
            reqArr.push(Medicine(medName, medQuant, block.timestamp));
            emit MedicineRequested(medName, medQuant, block.timestamp);
        }
    }

    // Function to view all requested medicines
    function viewRequestedMed() public view returns (Medicine[] memory) {
        return reqArr;
    }
    function viewPurchasedMed() public view returns (Medicine[] memory) {
        return purchasedMedArr;
    }
}
