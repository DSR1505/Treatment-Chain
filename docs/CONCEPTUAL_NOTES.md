# Conceptual Notes

## What are the parameters a patient is tested for COVID-19

There are three types of tests:

- PCR Test ( Most accurate) Duration: Several Minutes to several days.
- Antigen Test (Not as accurate compartively to PCR Test) Duration: Upto 15 minutes
- Antibody Test (Doesn't tell whether you are immune to infection or not) Duration: Upto several days.

Since the PCR Test is most accurate we go with the PCR Test which means we only consider patient that gone through the PCR Test.

Following is the result of RT-PCR Test:

35 cycles of real-time test happens that release 35 billions of DNA strands copies. Each copy realeses some fluorescent dye. The amount
is recorded in each cycle. When amount of fluorescent dye crosses certain threshold confirms the presence of virus.

**Conclusion: Record the amount of flourscent dye in 35 cycles for each patient went through RT-PCR Test.**

References:

- [Types of Test for COVID-19 in Labratory](https://labtestsonline.org/sites/aacc-lto.us/files/inline-files/COVID19Infographic8.5x11.FINAL__0.pdf)

- [How RT-PCR Test Happens?](https://www.newindianexpress.com/states/kerala/2020/may/21/rt-pcr-tests-what-it-is-and-how-it-is-done-2146351.html)

## Find the registration fields for the hospitals and the validation method

Research completed by @HUNAR214. To be Published here.

## Find the registration fields for the research institute and the validation method

Since we are only targeting India for the prototyping purpose.

All the medical research institute are developed or governed by Indian Council of Medical Research(ICMR).

Following are the fields we consider to be filled by Medical Research Institute:

- Name of Institute
- Identification Number
- Country

We will create an hypothetical Information Source that will validate the information that differs from country to country.

If source found the institute queried, the following information will be evaluated back:

- Location (Latitude and Longitude)
- Established (Year)
- Website

## Create the list of fields to identify a person and based on the region find the validation method

A person will be identified by the two fields only:

- Country
- Government Identification Number

The information resource will be different based upon country, if information source finds any record,it returns:

- Date-of-birth(if available)
- Address (if available)

Right now in order to test the above process we will choose India as country and have UIDAI information repository to avail the above data using valid identification number.

## How to validate the past medical history of the patient

To be researched.

References:

[The Health Indicators](https://en.wikipedia.org/wiki/Health_indicator)

## Create the list of insights we can get from the data of the patients

To be researched.
