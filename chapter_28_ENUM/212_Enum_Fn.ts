enum SeverityLevels {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    CRITICAL = "critical",
    BLOCKING = "blocking"
}

enum SeverityLevelsExampleNoValue {
    LOW,
    MEDIUM,
    HIGH,
    CRITICAL,
    BLOCKING
}

console.log(SeverityLevels.LOW);
console.log(SeverityLevelsExampleNoValue.LOW, SeverityLevelsExampleNoValue.MEDIUM, SeverityLevelsExampleNoValue.HIGH, SeverityLevelsExampleNoValue.CRITICAL, SeverityLevelsExampleNoValue.BLOCKING); // If no value is assigned, index is the output

enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://api.com"
}

console.log(Environment.QA);
