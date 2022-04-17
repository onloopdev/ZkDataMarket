 - - - -
![datainfo](data1.gif "Github logo") 
 - - - -

  <h1 align="center">ZkDataMarket</h1>


DataMarket is a data publishing system using Zero-knowledge proof (ZKP) proposed by Barry Whitehat. For more detailed information read this [post](https://hackmd.io/3D4lOndVSi6Ee0W_XL4Jrw?view)



## Brief Overview :dart:
> Every day, sellers try to sell data ,After the data is sold, sellers have to trust that that the buyer will not give away or re-sell the data to a third party.
>> It is easy to make copies of data so people will always be able to re-sell data.
>>>An alternative approach is to be paid to publish some data to everyone
>>>> DataMarket has a way to publish data so that everyone is able to pay for it at once.
>>>>>Once a certain amount has been raised the data is published or otherwise the seller is unable to collect the proceeds.
- - - -

### Use Case :man_astronaut:
>***Publisher***
>>When any publisher wants to publish data
>>>they must first encrypt the source data, and then the data-market protocol will open part of the data for others to preview 
>>>> After a part of the data is published, the publisher needs to provide a ZK-Proof proving that the public part is part of the complete data 

>***For Oher Users***
>>Users can browse all the data in the market
>>>download some data that has been published by the publisher, or choose to sponsor some data to be published. 
>>>>When the user chooses to support a certain data, the page will automatically verify the proof provided by the publisher 
>>>>>If the verification fails, the data cannot be sponsored to ensure the accuracy of the supporting data.

- - - -
## Demo Site :tada: :confetti_ball:
Check out Data Market Demo site [here.](http://47.107.250.143/) .
- - - -
## User Guide :medal_military:
 Refer to the user guide [here](./website/user-guide.md). 
 - - - -
## Contract :globe_with_meridians:
 [The contract has already been deployed on Harmony testnet.](https://explorer.pops.one/tx/0x562a5c50d524fd68cd3c4f3c122edd99f1eb3fb45fea756277eba19aefa38677)
 - - - -
## Testing Guide :rocket:
 Refer to the  unit tests docs included in each sub-module 

- - - - 
The majority of this repo :hearts: is forked from  [ZK-app](https://github.com/zkp-application/data-market)
- - - -
