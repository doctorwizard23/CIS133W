console.log("PCC Housing Insecurity Survey Questions")

function createSurveyQuestions() {
    var q1 = new MultipleSelectQuestionOther("Status", 
                                             "What is your student or faculty status at PCC? (select more than one if applicable)", [
        "Full Time Student",
        "Part Time student",
        "GED Student",
        "High School Dual Enrollment",
        "International Student",
        "Work Study",
        "Full Time Faculty",
        "Part Time Faculty",
        "Full Time Staff",
        "Part Time Staff",
        "Management"
        ]
    );
    
    var q2 = new MultipleSelectQuestion(
    "Campus",
    "What location do you primarily spend your time when at PCC? (IF equally split between campuses – check both)",
    [
        "Cascade Campus",
        "Rock Creek Campus",
        "Southeast Campus",
        "Sylvania Campus",
        "Online courses only",
        "Other PCC Center/location"
        ]
    );
    
    var q3 = new ShortAnswerQuestion("Zip Code", "What is your Zip Code?");
    
    var q4 = new MultipleSelectQuestionOther(
        "Sources of Income", 
        "Please select all income/loan sources that apply:",
        [
            "Employment",
            "Parents/Guardians/Family",
            "School Loans",
            "Child Support",
            "Alimony",
            "Scholarships/Grants",
            "Disability",
            "Veteran Benefits"
        ]
    );
    
    var q5 = new MultipleChoiceQuestion(
        "Yearly Income",
        "What is your yearly income? (Please include income from all sources)",
        [
            "Under 10,000",
            "10,000-19,999",
            "20,000-29,999",
            "30,000-39,999",
            "40,000-49,999",
            "50,000 or above"
        ]
        
    );
    
    var q6 = new MultipleChoiceQuestionOther(
        "Gender",
        "What is your gender?",
        [
            "Male",
            "Female",
            "I do not identify with a gender",
            "Prefer not to answer"
        ]
    );
    
    var q7 = new MultipleSelectQuestionOther(
        "Race/Ethnicity",
        "What is your race/ethnicity?",
        [
            "White",
            "Black or African American",
            "Asian",
            "American Indian and Alaska Native",
            "Native Hawaiian or Other Pacific Islander",
            "Two or more races (includes Hispanic or Latino)",
            "Hispanic or Latino (regardless of race)",
            "Prefer not to answer"
        ]
    );
    
    var q8 = new ShortAnswerQuestion("Age", "What is your age?")
    
    var q9 = new MultipleChoiceQuestionOther(
        "Relationship Status",
        "What is your relationship status?",
        [
            "Single",
            "Married",
            "Partnered",
        ]
    );
    
    var q10 = new MultipleChoiceQuestionOther(
        "Sexual Orientation",
        "What is your sexual orientation?",
        [
            "Straight",
            "Gay/Lesbian",
            "Bisexual",
            "Prefer not to answer",
        ]
    );
    
    
    var q11 = new MultipleChoiceQuestionOther(
        "Current Housing Type",
        "What type of housing do you currently live in?",
        [
            "House",
            "Condominium",
            "Apartment",
            "Duplex",
            "Mobile Home",
            "Homeless (if yes skip to #16)"
        ]
    );
    
    var q12 = new MultipleChoiceQuestion(
        "Housing Ownership",
        "Is your living space rented or owned?",
        ["Rent", "Own"]
    );
    
    var allQuestions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12];
    
    
    for (var counter = 0; counter < allQuestions.length; counter++) {
        allQuestions[counter].number = counter + 1;
    }
    
    var s1 = new QuestionSection("Demographics", [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]);
    
    var s2 = new QuestionSection("Housing Information", [q11, q12]);
    
    var allSections = [s1, s2];
    
    for (var counter = 0; counter < allSections.length; counter++) {
        allSections[counter].number = counter + 1;
    }
    
    return new Survey("PCC Housing Insecurity Survey", [s1, s2]);
    
}