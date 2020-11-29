# IMPLEMENTATION NOTES #
<!--All the researched docs will be updated by today-->
----------------------------------------------------------------------

## What is a Wallet ##

Wallet contains the keys: public key and private key for the
making the [transaction](#what-is-a-transaction) and verifying the transaction of the
participating entity. i.e. Hospitals and Reasearch Institute. If somebody
lost the key-pairs it will lose all the ownership over the transactions.

Each and every entitty participating in the system.

## What is a Transaction ##

There will be three types transactions:
1. Admit Transaction
2. Treatment Transaction
3. Discharge Transaction
    
All three transactions will be from the Hospital to itself.All the transactions will be verified by the other Hospitals present in the network.

The transactions will be *digitally signed* by the hospital itself using [wallet](#what-is-a-wallet).

**Descriptions of Transactions below:**

**Admit Transaction:** This type of transaction will happen when the
    patient will happen to the Hospital.The details of the patient i.e. person identity and 
    the past details will be filled (see __CONCEPTUAL_NOTES.md__) by the hospital. The transaction
    later verified through validation script. [see Transaction Validation](#what-is-a-transaction-validation).

**Treatment Transaction:** This type of transaction will happen with the verified only with the Admit Transactions(i.e. patients are registered with the specific hospital)

This transaction contains the treatment details of patient it will distinguished by header that contains the identification number of patient. This transactions doesn't need validation because it signifies each and every patient should be given treatment.

**Discharge Transaction:** This type of trasaction takes place when a patient
    discharges from the Hospital. This transaction will be validated by the transaction validation 
    script.

## What is a Transaction Validation ##

Transaction validation will happen for two reasons:
+ No Fraudlent Patient ever admitted
+ All the validated patient should be properly treated 

First condition, the patient will only be admitted in the form
    of Admit Transaction will only be verified when it is proved computationally the patient is COVID positive. See #CONCEPTUAL_NOTES.md.

All the validated patient should have the transactions of type treatment which signifies that the patient is treated by hospital.

The discharge transaction could only happen if the patient is treated at least once.i.e., there will be atleast one treatment transaction took place for that patient.
    

## #[block]:What is a Block ##

A block signifies the timpestamped ledger of transaction which contains the three types of transactions for only one patient. The transaction should be verified then only it can become the part of the block.So
the structure of the block could be described as below:

//============================

         BLOCK HEADER

XXXXXXXXXXXXXXXXXXXXXXXXXXXXX

       ADMIT TRANSACTION

XXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    n-TREATMENT TRANSACTIONS

XXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    DISCHARGE TRANSACTION

XXXXXXXXXXXXXXXXXXXXXXXXXXXXX 

 DIGITAL SIGNATURE OF VERIFIER

============================//

So basically a block in a word can be described as the medical record for the patient in a hospital.

## What is a Consensus Protocol ##

Since the decentralised network will grow bigger and bigger with more peers joins it. There should be some way through which we can give chance to each and every node to verify the transactions and record it as block.
For these purpose, we will be using __PROOF OF WORK CONSESUS PROTOCOL__. 
This allows the nodes to solve a mathematical puzzle computationally using their machine which burns cpu processing power. Whichever,node solves the puzzle first will get the chance to purpose the complete block.

In order to purpose the block any participant must have all three kinds of transactions for the same patient and signed by the same hospital on all three with the correct timestamping order. Here is the order:
            
     ________________   _________________   ________________   ____________
    |   Patient #X   | |  Patient #X     | | Patient #X     | |Patient#X   
    |   TX Header    | |   TX Header     | |   TX Header    | | TX Header
    |   Admit TX     | |  Treatment TX-1 | | Treatment TX-n | |Discharge TX
    |   Timestamp t1 | |  Timestamp t2   |.| Timestamp tn   | |Timestamp tx
    |   Hospital #Y  | |  Hospital #Y    | | Hospital #Y    | |Hospital #Y
    |   (DigiSign#Y) | |  (DigiSign#Y)   | | (DigiSign#Y)   | |(DigiSign#Y)
    |________________| |_________________| |________________| |____________
    --------t1----------------t2------------------tn--------------tx--->Timeline (Unix Epoch)
            \                 |                   /              /
             \                |                  /              /
              \               |                 /              /
               \              |                /              /
                \             |               /              / 
                 \            |              /              /
                  \           |             /              /
                   \          |            /              /
                    \         |           /              /
                     \        |          /              /
                      \       |         /              /
                       \      |        /              /
                     __________________________________
                    |         BLOCK #Z                 | 
                    |        BLOCK HEADER              |
                    |         PATIENT #X               |                  
                    |        ADMIT TX AT t1            |             
                    |        TREATMENT TX t2           |               
                    |           ....                   |       
                    |        TREATMETNT TX tn          |                
                    |        DISCHARGE TX tx           |              
                    |        (DIGISIGN #Y)             |
                    |  VERIFIED: (DIGISIGN #W) at tx+b | 
                    |__________________________________|
Then only he can collect them in a block and propose it.

## What is a Chain ##

The chain will be timestamped ledger of different patient medical record signed by different hospitals and verified by different hospital aligned by the increasing timeline according to the UNIX epochs.And all blocks are tamper-resistant and immutable,append only. This is achieved through the concept of one-way-hash function in cryptography.

       _______________        _______________
      |    BLOCK #1   |      |   BLOCK #2    | 
      | BLOCK #0 HASH |      | BLOCK #1 HASH | 
      |   TXs of #X   |      |   TXs of #C   |
      |   Creator:    |      |   Creator:    |
      |  (DigiSign#Y) | ---> |  (DigiSign#A) | ---> NEXT BLOCK
      |   Verifier:   |      |   Verifier:   |
      |  (DigiSign#Z) |      |  (DigiSign#B) |
      |   Timestamp:  |      |   Timestamp:  |
      |       t1      |      |       t2      |
      |_______________|      |_______________|
    ----------t1---------------------t2------------------> Timeline (Unix Epoch)

## What is a Network ##

Since there are various entities need to communicate to make and verify the transactions. For these aforementioned purposes we need a network.We will be using Internet to establish communication among various entities.The kind of network topology adopted here will be peer-to-peer network.
So any node(entity) can join or leave the network at will. See types of clients: [thick client](#what-is-thick-client) or [thin client](#what-is-thin-client)

## What is Thick-Client ##

Thick client are the client which can make and verify the transaction as well as read the longest chain. They are the client that will get the incentive to maintian the system. The problem related to the scalability of the network with the exponential increase of nodes will be dealt later.

## What is Thin-Client ##

Thin-client are the clients that can only read the chain records. That will be served useful in data intensive applications. This kind of the data will be served for the research based applications where the affect of disease and the affect of medicine for certain disease can be evaluated computationally using Artificial Intelligence applications.

## What will be incentives in the system ##

To be Researched
