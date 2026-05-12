// Smart Interview System - Complete Question Bank
// Contains 510 professional interview questions (15 easy + 30 medium + 40 hard per role × 6 roles)
// MCQ, Text, and Scenario-based questions for different roles and difficulty levels

const questionBank = {
    // PHP Developer Questions (85 total)
    "PHP Developer": {
        easy: [
            // Original 5 questions
            {
                type: "mcq",
                question: "What does PHP stand for?",
                options: [
                    "Personal Home Page",
                    "PHP: Hypertext Preprocessor",
                    "Private Home Page",
                    "Public Hypertext Processor"
                ],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "mcq",
                question: "Which symbol is used to access the value of variable in PHP?",
                options: ["#", "@", "$", "%"],
                correctAnswer: 2,
                points: 10
            },
            {
                type: "text",
                question: "What is the difference between echo and print in PHP?",
                keywords: ["return", "value", "echo", "print", "speed", "faster"],
                points: 15
            },
            {
                type: "mcq",
                question: "Which of the following is used to include a file in PHP?",
                options: ["#include", "import", "require", "add"],
                correctAnswer: 2,
                points: 10
            },
            {
                type: "scenario",
                question: "A client complains that their PHP website is running slow. The website has many database queries on each page load. What initial steps would you take to improve performance?",
                keywords: ["cache", "caching", "query", "optimize", "database", "index", "reduce"],
                points: 15
            },
            // New 10 questions
            {
                type: "mcq",
                question: "Which function is used to get the length of a string in PHP?",
                options: ["length()", "strlen()", "size()", "count()"],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "mcq",
                question: "What is the correct way to create an array in PHP?",
                options: ["$arr = array();", "$arr = [];", "Both A and B", "array $arr = {};"],
                correctAnswer: 2,
                points: 10
            },
            {
                type: "text",
                question: "Explain the difference between == and === in PHP.",
                keywords: ["equal", "identical", "type", "value", "comparison", "strict"],
                points: 15
            },
            {
                type: "mcq",
                question: "Which superglobal is used to collect form data in PHP?",
                options: ["$_GET", "$_POST", "$_REQUEST", "All of the above"],
                correctAnswer: 3,
                points: 10
            },
            {
                type: "mcq",
                question: "What does the 'isset()'function do in PHP?",
                options: [
                    "Checks if variable exists",
                    "Checks if variable is set and not null",
                    "Sets a variable value",
                    "Deletes a variable"
                ],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "scenario",
                question: "You need to send an email from a PHP application. What PHP function would you use and what information is required?",
                keywords: ["mail", "function", "to", "subject", "message", "headers", "SMTP"],
                points: 15
            },
            {
                type: "mcq",
                question: "Which loop is used to iterate through an associative array in PHP?",
                options: ["for loop", "while loop", "foreach loop", "dowhile loop"],
                correctAnswer: 2,
                points: 10
            },
            {
                type: "text",
                question: "What is the purpose of the $_SESSION superglobal in PHP?",
                keywords: ["session", "data", "user", "store", "persist", "server", "track"],
                points: 15
            },
            {
                type: "mcq",
                question: "Which PHP function is used to connect to a MySQL database?",
                options: ["mysql_connect()", "mysqli_connect()", "db_connect()", "connect_db()"],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "scenario",
                question: "A user is unable to upload files through your PHP form. What are the common issues you would check?",
                keywords: ["file", "size", "upload_max_filesize", "post_max_size", "php.ini", "permissions", "tmp"],
                points: 15
            }
        ],
        medium: [
            // Original 5 questions
            {
                type: "mcq",
                question: "What is the correct way to connect to a MySQL database in PHP PDO?",
                options: [
                    "mysql_connect()",
                    "new PDO()",
                    "mysqli_connect()",
                    "database_connect()"
                ],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "You need to build a RESTful API for a mobile app. Describe the key components you would include and explain your choice of authentication method.",
                keywords: ["REST", "API", "endpoint", "JSON", "authentication", "JWT", "token", "OAuth", "HTTP", "method"],
                points: 20
            },
            {
                type: "text",
                question: "Explain the concept of dependency injection in PHP and why it's useful.",
                keywords: ["dependency", "injection", "container", "coupling", "testable", "flexible", "decoupled"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which PSR standard defines autoloading?",
                options: ["PSR-1", "PSR-2", "PSR-4", "PSR-7"],
                correctAnswer: 2,
                points: 15
            },
            {
                type: "scenario",
                question: "A legacy PHP application has SQL injection vulnerabilities. What steps would you take to secure it?",
                keywords: ["prepared", "statement", "PDO", "mysqli", "escape", "sanitize", "input", "validate"],
                points: 20
            },
            // New 25 questions
            {
                type: "mcq",
                question: "What is the purpose of Composer in PHP?",
                options: [
                    "Code compiler",
                    "Dependency manager",
                    "Database manager",
                    "Testing framework"
                ],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "text",
                question: "Explain the MVC pattern and how it's implemented in PHP frameworks.",
                keywords: ["MVC", "model", "view", "controller", "separation", "concern", "architecture", "framework"],
                points: 20
            },
            {
                type: "scenario",
                question: "Design a session management system that prevents session fixation and hijacking attacks.",
                keywords: ["session", "regenerate", "id", "secure", "httponly", "cookie", "token", "CSRF", "IP"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which magic method is called when an object is treated as a string?",
                options: ["__construct()", "__toString()", "__get()", "__call()"],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "text",
                question: "What are traits in PHP and when would you use them?",
                keywords: ["trait", "reuse", "code", "multiple", "inheritance", "horizontal", "composition"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which HTTP status code should be returned for a successful POST request that creates a resource?",
                options: ["200 OK", "201 Created", "204 No Content", "202 Accepted"],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "Implement a caching strategy for a PHP application that handles product catalog data. Consider cache invalidation.",
                keywords: ["cache", "Redis", "Memcached", "invalidation", "TTL", "key", "strategy", "expire"],
                points: 20
            },
            {
                type: "text",
                question: "Explain namespace in PHP and why they are important in modern PHP development.",
                keywords: ["namespace", "collision", "avoid", "organize", "autoload", "PSR", "package"],
                points: 20
            },
            {
                type: "mcq",
                question: "What does ORM stand for in PHP development?",
                options: [
                    "Object Relational Mapping",
                    "Open Resource Manager",
                    "Operational Request Method",
                    "Object Resource Model"
                ],
                correctAnswer: 0,
                points: 15
            },
            {
                type: "scenario",
                question: "A user uploads a CSV file with 100,000 rows. How would you process it efficiently without timing out?",
                keywords: ["batch", "process", "chunk", "queue", "background", "job", "memory", "limit", "stream"],
                points: 20
            },
            {
                type: "text",
                question: "What is the difference between interface and abstract class in PHP?",
                keywords: ["interface", "abstract", "class", "implement", "extend", "method", "multiple", "contract"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which function is used to prevent XSS attacks in PHP?",
                options: ["strip_tags()", "htmlspecialchars()", "mysql_real_escape_string()", "filter_var()"],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "Design a multi-tenant SaaS application architecture in PHP where each tenant has isolated data.",
                keywords: ["multi-tenant", "database", "schema", "isolation", "tenant", "identifier", "middleware", "security"],
                points: 20
            },
            {
                type: "text",
                question: "Explain how middleware works in PHP frameworks like Laravel.",
                keywords: ["middleware", "request", "response", "filter", "pipeline", "before", "after", "chain"],
                points: 20
            },
            {
                type: "mcq",
                question: "What is the purpose of the yield keyword in PHP?",
                options: [
                    "Stop execution",
                    "Create generators",
                    "Pause threads",
                    "Return multiple values"
                ],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "Implement a rate limiting system for your API to prevent abuse. Explain your approach.",
                keywords: ["rate", "limit", "throttle", "Redis", "counter", "window", "sliding", "token", "bucket"],
                points: 20
            },
            {
                type: "text",
                question: "What are PHP streams and how can they be used for file operations?",
                keywords: ["stream", "wrapper", "file", "resource", "filter", "context", "network", "memory"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which design pattern is commonly used for database connections to avoid multiple instances?",
                options: ["Factory", "Singleton", "Observer", "Strategy"],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "Build a payment gateway integration system. What security measures would you implement?",
                keywords: ["payment", "gateway", "secure", "SSL", "encrypt", "PCI", "token", "validate", "webhook"],
                points: 20
            },
            {
                type: "text",
                question: "Explain the difference between late static binding and regular inheritance in PHP.",
                keywords: ["late", "static", "binding", "self", "static", "inheritance", "override", "parent"],
                points: 20
            },
            {
                type: "mcq",
                question: "What is the purpose of the finally block in PHP try-catch?",
                options: [
                    "Catch all errors",
                    "Always execute code regardless of exception",
                    "Throw new exception",
                    "Skip error handling"
                ],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "Design a logging system for a PHP application that categorizes errors by severity and sends alerts for critical issues.",
                keywords: ["logging", "monolog", "PSR-3", "severity", "level", "alert", "email", "slack", "file"],
                points: 20
            },
            {
                type: "text",
                question: "What is the difference between require and include in PHP? When would you use each?",
                keywords: ["require", "include", "fatal", "error", "warning", "once", "file", "dependency"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which function is used to get the current timestamp in PHP?",
                options: ["date()", "time()", "now()", "timestamp()"],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "Implement a search functionality with autocomplete for product names. Consider performance for large datasets.",
                keywords: ["search", "autocomplete", "AJAX", "cache", "index", "LIKE", "elasticsearch", "optimize"],
                points: 20
            },
            {
                type: "text",
                question: "Explain how you would implement a job queue system in PHP for background processing.",
                keywords: ["queue", "job", "worker", "Redis", "background", "async", "Laravel", "Beanstalkd", "RabbitMQ"],
                points: 20
            }
        ],
        hard: [
            // Original 5 questions
            {
                type: "scenario",
                question: "Design a scalable architecture for a high-traffic e-commerce platform using PHP. Include details about caching strategies, database optimization, and handling concurrent transactions.",
                keywords: ["Redis", "memcached", "cache", "database", "queue", "horizontal", "scaling", "load", "balancer", "transaction", "lock"],
                points: 30
            },
            {
                type: "text",
                question: "Explain how PHP's garbage collection works and how it differs from manual memory management in languages like C.",
                keywords: ["garbage", "collection", "reference", "counting", "cycle", "memory", "automatic", "PHP"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which design pattern is Laravel's Service Container based on?",
                options: ["Factory Pattern", "Singleton Pattern", "Dependency Injection Container", "Observer Pattern"],
                correctAnswer: 2,
                points: 20
            },
            {
                type: "scenario",
                question: "You're tasked with migrating a monolithic PHP application to a microservices architecture. Outline your approach, potential challenges, and how you'd handle shared data.",
                keywords: ["microservices", "API", "gateway", "service", "independent", "database", "event", "message", "queue", "Docker"],
                points: 30
            },
            {
                type: "text",
                question: "Describe the N+1 query problem in ORM (like Eloquent) and explain three strategies to solve it.",
                keywords: ["N+1", "query", "eager", "loading", "with", "join", "optimize", "relationship", "performance"],
                points: 25
            },
            // New 35 questions
            {
                type: "scenario",
                question: "Design a real-time notification system for a social media platform with millions of users. Include WebSocket implementation and fallback strategies.",
                keywords: ["WebSocket", "real-time", "notification", "broadcast", "Redis", "pub", "sub", "scaling", "fallback", "polling"],
                points: 30
            },
            {
                type: "text",
                question: "Explain PHP's opcode caching and how tools like OPcache improve performance.",
                keywords: ["opcode", "cache", "OPcache", "bytecode", "compilation", "performance", "preload", "JIT"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which approach is best for handling database transactions across multiple services in a distributed system?",
                options: [
                    "Two-phase commit",
                    "Saga pattern",
                    "Global transactions",
                    "Lock-based synchronization"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Build a content delivery system that serves images in multiple formats (WebP, AVIF, JPEG) based on browser support. Include caching strategy.",
                keywords: ["CDN", "image", "format", "WebP", "AVIF", "optimize", "cache", "responsive", "lazy", "load"],
                points: 30
            },
            {
                type: "text",
                question: "Explain event sourcing pattern and how it can be implemented in PHP for audit trails.",
                keywords: ["event", "sourcing", "CQRS", "aggregate", "stream", "replay", "immutable", "audit", "history"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is the maximum execution time limit in php.ini that can be set?",
                options: ["No limit (0)", "3600 seconds", "86400 seconds", "Depends on server"],
                correctAnswer: 0,
                points: 20
            },
            {
                type: "scenario",
                question: "Design a distributed session management system for a PHP application running across multiple servers without sticky sessions.",
                keywords: ["distributed", "session", "Redis", "Memcached", "database", "token", "stateless", "JWT", "share"],
                points: 30
            },
            {
                type: "text",
                question: "Describe how you would implement a circuit breaker pattern in PHP for external API calls.",
                keywords: ["circuit", "breaker", "pattern", "failure", "timeout", "fallback", "retry", "resilience", "threshold"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which strategy provides the best read performance in a master-slave database setup?",
                options: [
                    "Read from master only",
                    "Read from slaves, write to master",
                    "Round-robin between all servers",
                    "Random selection"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Implement a complex search system with filters, facets, and full-text search for an e-commerce site with millions of products.",
                keywords: ["Elasticsearch", "search", "filter", "facet", "full-text", "index", "aggregation", "relevance", "score"],
                points: 30
            },
            {
                type: "text",
                question: "Explain how reflection works in PHP and provide real-world use cases.",
                keywords: ["reflection", "introspection", "class", "method", "property", "metadata", "annotation", "runtime"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which caching strategy is most appropriate for frequently updated data?",
                options: [
                    "Cache-aside",
                    "Write-through",
                    "Write-behind",
                    "Refresh-ahead"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Design an OAuth 2.0 authentication server in PHP that supports multiple grant types and token refresh.",
                keywords: ["OAuth", "authentication", "authorization", "token", "grant", "refresh", "client", "scope", "JWT"],
                points: 30
            },
            {
                type: "text",
                question: "Explain database connection pooling and how it can be achieved in PHP applications.",
                keywords: ["connection", "pool", "persistent", "reuse", "PDO", "MySQLi", "performance", "overhead", "limit"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is the recommended way to prevent timing attacks in password comparison?",
                options: [
                    "Use === operator",
                    "Use hash_equals()",
                    "Use strcmp()",
                    "Use password_verify()"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Build a distributed lock mechanism for coordinating tasks across multiple PHP workers processing the same queue.",
                keywords: ["distributed", "lock", "Redis", "mutex", "atomic", "worker", "coordination", "deadlock", "TTL"],
                points: 30
            },
            {
                type: "text",
                question: "Describe the differences between synchronous and asynchronous PHP and when you'd use ReactPHP or Swoole.",
                keywords: ["asynchronous", "synchronous", "ReactPHP", "Swoole", "event", "loop", "non-blocking", "concurrent"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which HTTP header should be used to prevent clickjacking attacks?",
                options: [
                    "X-Content-Type-Options",
                    "X-Frame-Options",
                    "Content-Security-Policy",
                    "Strict-Transport-Security"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Design a database sharding strategy for a multi-tenant application with varying data sizes per tenant.",
                keywords: ["sharding", "partition", "tenant", "database", "horizontal", "scaling", "shard", "key", "routing"],
                points: 30
            },
            {
                type: "text",
                question: "Explain how you would implement a blue-green deployment strategy for a PHP application.",
                keywords: ["blue", "green", "deployment", "zero", "downtime", "switch", "rollback", "infrastructure", "load"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is the purpose of the declare(strict_types=1) directive in PHP?",
                options: [
                    "Enable type checking",
                    "Enforce strict type declarations",
                    "Disable type coercion",
                    "Enable static typing"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Implement a data pipeline that ingests, transforms, and loads (ETL) large datasets from multiple sources into a data warehouse.",
                keywords: ["ETL", "pipeline", "extract", "transform", "load", "batch", "stream", "data", "warehouse", "queue"],
                points: 30
            },
            {
                type: "text",
                question: "Explain the concept of idempotency in API design and how to implement it in PHP.",
                keywords: ["idempotent", "API", "request", "duplicate", "safe", "retry", "token", "key", "operation"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which pattern is best for managing complex conditional logic in business rules?",
                options: [
                    "Strategy Pattern",
                    "Chain of Responsibility",
                    "State Pattern",
                    "Rules Engine Pattern"
                ],
                correctAnswer: 3,
                points: 20
            },
            {
                type: "scenario",
                question: "Design a recommendation engine for an e-commerce platform that provides personalized product suggestions based on user behavior and preferences.",
                keywords: ["recommendation", "collaborative", "filtering", "machine", "learning", "personalization", "algorithm", "similarity", "matrix"],
                points: 30
            },
            {
                type: "text",
                question: "Describe how you would optimize a PHP application for handling 10,000+ concurrent WebSocket connections.",
                keywords: ["WebSocket", "concurrent", "async", "ReactPHP", "Swoole", "event", "loop", "scaling", "memory"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which technique provides the best security for storing sensitive configuration in PHP?",
                options: [
                    "Environment variables",
                    "Encrypted config files",
                    "Database storage",
                    "Hardcoded constants"
                ],
                correctAnswer: 0,
                points: 20
            },
            {
                type: "scenario",
                question: "Build a fault-tolerant distributed task scheduler that ensures tasks are executed exactly once even if workers fail.",
                keywords: ["distributed", "task", "scheduler", "fault", "tolerant", "exactly", "once", "worker", "queue", "lease"],
                points: 30
            },
            {
                type: "text",
                question: "Explain hexagonal architecture (ports and adapters) and how it can be applied to PHP applications.",
                keywords: ["hexagonal", "architecture", "ports", "adapters", "domain", "infrastructure", "decoupled", "testable"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is the most effective way to prevent SQL injection in PHP?",
                options: [
                    "mysqli_real_escape_string()",
                    "Prepared statements with PDO",
                    "addslashes()",
                    "strip_tags()"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Design a multi-region active-active architecture for a PHP application with data consistency guarantees.",
                keywords: ["multi-region", "active", "replication", "consistency", "conflict", "resolution", "CRDT", "eventual", "latency"],
                points: 30
            },
            {
                type: "text",
                question: "Explain how you would implement command query responsibility segregation (CQRS) in a PHP application.",
                keywords: ["CQRS", "command", "query", "separation", "write", "read", "model", "event", "sourcing"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which approach is recommended for API versioning in RESTful services?",
                options: [
                    "URL versioning (/v1/endpoint)",
                    "Header versioning (Accept: application/vnd.api+json;version=1)",
                    "Query parameter (?version=1)",
                    "All can be valid depending on requirements"
                ],
                correctAnswer: 3,
                points: 20
            },
            {
                type: "scenario",
                question: "Implement a comprehensive backup and disaster recovery plan for a PHP application with a MySQL database and file storage.",
                keywords: ["backup", "disaster", "recovery", "RTO", "RPO", "snapshot", "replication", "restore", "automated"],
                points: 30
            }
        ]
    },

    // Frontend Engineer Questions (85 total)
    "Frontend Engineer": {
        easy: [
            // Original 5 + 10 new = 15 total
            {
                type: "mcq",
                question: "Which HTML tag is used to define an internal style sheet?",
                options: ["<css>", "<script>", "<style>", "<link>"],
                correctAnswer: 2,
                points: 10
            },
            {
                type: "mcq",
                question: "What does CSS stand for?",
                options: [
                    "Creative Style Sheets",
                    "Cascading Style Sheets",
                    "Computer Style Sheets",
                    "Colorful Style Sheets"
                ],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "text",
                question: "Explain the difference between var, let, and const in JavaScript.",
                keywords: ["scope", "var", "let", "const", "block", "hoisting", "reassign"],
                points: 15
            },
            {
                type: "mcq",
                question: "Which method is used to add an element at the end of an array in JavaScript?",
                options: ["add()", "push()", "append()", "insert()"],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "scenario",
                question: "A button on your webpage doesn't respond to clicks. What debugging steps would you take?",
                keywords: ["console", "inspect", "event", "listener", "JavaScript", "error", "debug", "element"],
                points: 15
            },
            {
                type: "mcq",
                question: "Which CSS property is used to change text color?",
                options: ["text-color", "color", "font-color", "text-style"],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "mcq",
                question: "What is the purpose of the <div> tag in HTML?",
                options: [
                    "Create a division or section",
                    "Display images",
                    "Create forms",
                    "Add navigation"
                ],
                correctAnswer: 0,
                points: 10
            },
            {
                type: "text",
                question: "What is the difference between margin and padding in CSS?",
                keywords: ["margin", "padding", "outside", "inside", "border", "space", "box", "model"],
                points: 15
            },
            {
                type: "mcq",
                question: "Which JavaScript method converts a string to lowercase?",
                options: ["toLowerCase()", "toLower()", "lower()", "lowerCase()"],
                correctAnswer: 0,
                points: 10
            },
            {
                type: "mcq",
                question: "What does HTML stand for?",
                options: [
                    "Hyper Text Markup Language",
                    "High Tech Modern Language",
                    "Home Tool Markup Language",
                    "Hyperlinks and Text Markup Language"
                ],
                correctAnswer: 0,
                points: 10
            },
            {
                type: "scenario",
                question: "An image is not displaying on your webpage. What are the common reasons and how would you fix it?",
                keywords: ["path", "src", "URL", "file", "extension", "network", "console", "404"],
                points: 15
            },
            {
                type: "mcq",
                question: "Which attribute is used to open a link in a new tab?",
                options: ["target=\"_new\"", "target=\"_blank\"", "new=\"tab\"", "open=\"new\""],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "text",
                question: "What is the purpose of the alt attribute in an <img> tag?",
                keywords: ["alt", "alternative", "text", "accessibility", "SEO", "image", "description", "screen"],
                points: 15
            },
            {
                type: "mcq",
                question: "Which CSS selector has the highest specificity?",
                options: ["Element selector", "Class selector", "ID selector", "Universal selector"],
                correctAnswer: 2,
                points: 10
            },
            {
                type: "scenario",
                question: "Your website looks broken on mobile devices but fine on desktop. What steps would you take to fix it?",
                keywords: ["responsive", "media", "query", "viewport", "mobile", "breakpoint", "CSS", "device"],
                points: 15
            }
        ],
        medium: [
            // Original 5 + 25 new = 30 total
            {
                type: "scenario",
                question: "You need to implement infinite scrolling for a news feed. Describe your approach including performance considerations.",
                keywords: ["scroll", "event", "pagination", "API", "throttle", "debounce", "observer", "intersection", "lazy"],
                points: 20
            },
            {
                type: "text",
                question: "Explain the Virtual DOM and how it improves performance in React.",
                keywords: ["virtual", "DOM", "reconciliation", "diff", "real", "performance", "update", "efficient"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which CSS property is used to create a flexbox container?",
                options: ["display: flex", "flex: container", "layout: flex", "flexbox: true"],
                correctAnswer: 0,
                points: 15
            },
            {
                type: "scenario",
                question: "Your web app needs to work offline. What technologies and strategies would you use?",
                keywords: ["service", "worker", "cache", "storage", "IndexedDB", "offline", "PWA", "manifest"],
                points: 20
            },
            {
                type: "text",
                question: "What is the purpose of webpack and what problems does it solve?",
                keywords: ["webpack", "bundle", "module", "dependency", "optimization", "code", "splitting", "asset"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which React hook is used to perform side effects?",
                options: ["useState", "useEffect", "useContext", "useMemo"],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "text",
                question: "Explain the difference between local storage, session storage, and cookies.",
                keywords: ["localStorage", "sessionStorage", "cookie", "storage", "expire", "capacity", "server", "browser"],
                points: 20
            },
            {
                type: "scenario",
                question: "Implement a debounce function for a search input that delays API calls until the user stops typing.",
                keywords: ["debounce", "delay", "timeout", "input", "search", "API", "performance", "optimize"],
                points: 20
            },
            {
                type: "mcq",
                question: "What is the purpose of the key prop in React lists?",
                options: [
                    "Styling elements",
                    "Identifying elements for efficient re-rendering",
                    "Accessing DOM elements",
                    "Passing data to components"
                ],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "text",
                question: "What are CSS preprocessors and what advantages do they provide?",
                keywords: ["preprocessor", "SASS", "LESS", "variable", "nesting", "mixin", "function", "compile"],
                points: 20
            },
            {
                type: "scenario",
                question: "Design a form validation system that provides real-time feedback without annoying users.",
                keywords: ["validation", "real-time", "blur", "submit", "error", "message", "UX", "pattern", "regex"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which method is used to make HTTP requests in modern JavaScript?",
                options: ["XMLHttpRequest", "fetch()", "ajax()", "http.get()"],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "text",
                question: "Explain the concept of closures in JavaScript with a practical example.",
                keywords: ["closure", "scope", "function", "lexical", "encapsulation", "private", "variable"],
                points: 20
            },
            {
                type: "scenario",
                question: "Optimize the performance of a large data table with thousands of rows. What techniques would you use?",
                keywords: ["virtual", "scroll", "pagination", "lazy", "render", "windowing", "optimize", "performance"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which CSS Grid property defines the columns of a grid?",
                options: [
                    "grid-template-columns",
                    "grid-columns",
                    "columns",
                    "grid-column-template"
                ],
                correctAnswer: 0,
                points: 15
            },
            {
                type: "text",
                question: "What is the difference between controlled and uncontrolled components in React?",
                keywords: ["controlled", "uncontrolled", "state", "ref", "form", "input", "value", "React"],
                points: 20
            },
            {
                type: "scenario",
                question: "Implement a responsive navigation menu that transforms into a hamburger menu on mobile devices.",
                keywords: ["responsive", "navigation", "hamburger", "menu", "media", "query", "mobile", "toggle"],
                points: 20
            },
            {
                type: "mcq",
                question: "What does the 'async'keyword do in JavaScript?",
                options: [
                    "Makes function run faster",
                    "Returns a Promise",
                    "Runs code in parallel",
                    "Prevents blocking"
                ],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "text",
                question: "Explain the CSS Box Model and its components.",
                keywords: ["box", "model", "content", "padding", "border", "margin", "width", "height"],
                points: 20
            },
            {
                type: "scenario",
                question: "Build an image carousel with auto-play, navigation arrows, and dot indicators.",
                keywords: ["carousel", "slider", "auto", "play", "navigation", "arrow", "indicator", "transition"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which accessibility attribute describes the purpose of an element?",
                options: ["alt", "title", "aria-label", "role"],
                correctAnswer: 2,
                points: 15
            },
            {
                type: "text",
                question: "What is the purpose of React Context API and when should you use it?",
                keywords: ["Context", "API", "prop", "drilling", "global", "state", "provider", "consumer", "share"],
                points: 20
            },
            {
                type: "scenario",
                question: "Implement a dark mode toggle that persists user preference across sessions.",
                keywords: ["dark", "mode", "theme", "toggle", "localStorage", "CSS", "variable", "persist", "preference"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which HTTP status code indicates a redirect?",
                options: ["200", "301", "404", "500"],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "text",
                question: "Explain event bubbling and event capturing in JavaScript.",
                keywords: ["event", "bubbling", "capturing", "propagation", "phase", "DOM", "listener", "stopPropagation"],
                points: 20
            },
            {
                type: "scenario",
                question: "Create a skeleton loading screen to improve perceived performance while data is loading.",
                keywords: ["skeleton", "loading", "placeholder", "shimmer", "perceived", "performance", "UX"],
                points: 20
            },
            {
                type: "mcq",
                question: "What is the purpose of the viewport meta tag?",
                options: [
                    "Set page title",
                    "Control page layout on mobile",
                    "Define character encoding",
                    "Add keywords for SEO"
                ],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "text",
                question: "Describe the difference between CSS Grid and Flexbox. When would you use each?",
                keywords: ["Grid", "Flexbox", "layout", "two-dimensional", "one-dimensional", "column", "row"],
                points: 20
            },
            {
                type: "scenario",
                question: "Optimize website loading speed. List and prioritize techniques you would implement.",
                keywords: ["optimize", "loading", "speed", "minify", "compress", "lazy", "CDN", "cache", "critical"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which promise method waits for all promises to settle?",
                options: ["Promise.all()", "Promise.race()", "Promise.allSettled()", "Promise.any()"],
                correctAnswer: 2,
                points: 15
            }
        ],
        hard: [
            // Original 5 + 35 new = 40 total
            {
                type: "scenario",
                question: "Design a real-time collaborative text editor (like Google Docs). Explain your technical approach, conflict resolution strategy, and how you'd handle network issues.",
                keywords: ["WebSocket", "CRDT", "operational", "transform", "conflict", "sync", "real-time", "concurrent", "delta"],
                points: 30
            },
            {
                type: "text",
                question: "Explain the event loop in JavaScript and how it handles asynchronous operations.",
                keywords: ["event", "loop", "call", "stack", "callback", "queue", "microtask", "macrotask", "async"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which pattern is recommended for managing complex state in large React applications?",
                options: ["Context API only", "Redux with middleware", "Local state only", "Props drilling"],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Your React application is experiencing performance issues with frequent re-renders. How would you identify the problem and optimize it?",
                keywords: ["React", "DevTools", "profiler", "memo", "useMemo", "useCallback", "shouldComponentUpdate", "PureComponent", "key"],
                points: 30
            },
            {
                type: "text",
                question: "Describe the differences between Server-Side Rendering (SSR), Static Site Generation (SSG), and Client-Side Rendering (CSR). When would you use each?",
                keywords: ["SSR", "SSG", "CSR", "SEO", "performance", "Next.js", "hydration", "static", "dynamic"],
                points: 25
            },
            {
                type: "scenario",
                question: "Build a micro-frontend architecture where multiple teams can deploy independently. Explain module federation and communication strategies.",
                keywords: ["micro", "frontend", "module", "federation", "webpack", "independent", "deploy", "communication", "event"],
                points: 30
            },
            {
                type: "text",
                question: "Explain how browser rendering works from HTML parsing to painting pixels on screen.",
                keywords: ["parsing", "DOM", "CSSOM", "render", "tree", "layout", "paint", "composite", "critical", "path"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which technique provides the best performance for animating elements?",
                options: [
                    "JavaScript animations",
                    "CSS transitions",
                    "CSS transforms with GPU acceleration",
                    "Canvas animations"
                ],
                correctAnswer: 2,
                points: 20
            },
            {
                type: "scenario",
                question: "Implement a comprehensive state management system with undo/redo, time-travel debugging, and state persistence.",
                keywords: ["state", "management", "undo", "redo", "time", "travel", "history", "snapshot", "persist", "Redux"],
                points: 30
            },
            {
                type: "text",
                question: "Describe Cross-Site Scripting (XSS) attacks and how to prevent them in modern frontend applications.",
                keywords: ["XSS", "cross-site", "scripting", "sanitize", "escape", "CSP", "content", "security", "policy"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is the purpose of Web Workers in JavaScript?",
                options: [
                    "Handle network requests",
                    "Run JavaScript in background threads",
                    "Manage service workers",
                    "Cache API responses"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Design a progressive web app (PWA) with offline support, push notifications, and app-like experience on mobile.",
                keywords: ["PWA", "progressive", "service", "worker", "offline", "push", "notification", "manifest", "cache"],
                points: 30
            },
            {
                type: "text",
                question: "Explain tree shaking in modern JavaScript bundlers and how to optimize for it.",
                keywords: ["tree", "shaking", "dead", "code", "elimination", "ES6", "module", "webpack", "optimize"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which React pattern helps avoid prop drilling?",
                options: [
                    "Higher-Order Components",
                    "Render Props",
                    "Context API",
                    "All of the above"
                ],
                correctAnswer: 3,
                points: 20
            },
            {
                type: "scenario",
                question: "Implement a complex data visualization dashboard with real-time updates, multiple chart types, and interactive filters.",
                keywords: ["visualization", "dashboard", "chart", "D3", "real-time", "WebSocket", "filter", "interactive"],
                points: 30
            },
            {
                type: "text",
                question: "Describe the Critical Rendering Path and techniques to optimize it for faster page loads.",
                keywords: ["critical", "rendering", "path", "optimize", "CSS", "JavaScript", "async", "defer", "inline"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which caching strategy is best for a PWA with dynamic content?",
                options: [
                    "Cache First",
                    "Network First",
                    "Stale While Revalidate",
                    "Network Only"
                ],
                correctAnswer: 2,
                points: 20
            },
            {
                type: "scenario",
                question: "Build an accessible web application that meets WCAG 2.1 AA standards. What specific implementations are required?",
                keywords: ["accessibility", "WCAG", "ARIA", "keyboard", "navigation", "screen", "reader", "contrast", "semantic"],
                points: 30
            },
            {
                type: "text",
                question: "Explain code splitting strategies in React and when to use each technique.",
                keywords: ["code", "splitting", "lazy", "suspense", "dynamic", "import", "route", "component", "bundle"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is the primary benefit of using TypeScript in large frontend applications?",
                options: [
                    "Faster execution",
                    "Type safety and better tooling",
                    "Smaller bundle size",
                    "Better browser support"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Design a frontend architecture for a large-scale application with 50+ developers. Include code organization, testing, and deployment strategies.",
                keywords: ["architecture", "monorepo", "lint", "test", "CI", "CD", "component", "library", "documentation"],
                points: 30
            },
            {
                type: "text",
                question: "Explain the differences between cookies, localStorage, sessionStorage, and IndexedDB. When should each be used?",
                keywords: ["cookie", "localStorage", "sessionStorage", "IndexedDB", "storage", "capacity", "persist", "expire"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which technique prevents Cross-Site Request Forgery (CSRF) attacks?",
                options: [
                    "Input sanitization",
                    "CSRF tokens",
                    "HTTPS only",
                    "Content Security Policy"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Implement a sophisticated form wizard with multi-step validation, progress saving, and conditional logic between steps.",
                keywords: ["form", "wizard", "multi-step", "validation", "progress", "conditional", "save", "state"],
                points: 30
            },
            {
                type: "text",
                question: "Describe how CSS-in-JS solutions work and compare their trade-offs with traditional CSS.",
                keywords: ["CSS-in-JS", "styled", "components", "emotion", "performance", "scope", "dynamic", "runtime"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which React hook prevents unnecessary recalculations of expensive computations?",
                options: ["useState", "useEffect", "useMemo", "useCallback"],
                correctAnswer: 2,
                points: 20
            },
            {
                type: "scenario",
                question: "Build a real-time multiplayer game interface with WebSockets, optimistic updates, and lag compensation.",
                keywords: ["multiplayer", "WebSocket", "real-time", "optimistic", "update", "lag", "compensation", "sync"],
                points: 30
            },
            {
                type: "text",
                question: "Explain the concept of hydration in SSR frameworks and potential hydration mismatches.",
                keywords: ["hydration", "SSR", "server", "render", "client", "mismatch", "Next.js", "React", "interactive"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is the purpose of the Intersection Observer API?",
                options: [
                    "Detect element collisions",
                    "Observe element visibility in viewport",
                    "Monitor DOM mutations",
                    "Track user interactions"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Design a frontend monitoring system that tracks performance metrics, errors, and user behavior analytics.",
                keywords: ["monitoring", "performance", "metric", "error", "tracking", "analytics", "RUM", "Sentry", "logging"],
                points: 30
            },
            {
                type: "text",
                question: "Explain React Fiber architecture and how it enables features like Concurrent Mode.",
                keywords: ["Fiber", "architecture", "reconciliation", "concurrent", "mode", "priority", "interrupt", "React"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which HTTP header improves security by preventing MIME type sniffing?",
                options: [
                    "Content-Type",
                    "X-Content-Type-Options",
                    "Content-Security-Policy",
                    "X-Frame-Options"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Implement a sophisticated caching strategy for a SPA that handles authentication, real-time updates, and optimistic UI.",
                keywords: ["cache", "strategy", "SPA", "authentication", "real-time", "optimistic", "UI", "invalidation"],
                points: 30
            },
            {
                type: "text",
                question: "Describe the differences between imperative and declarative programming in the context of React.",
                keywords: ["imperative", "declarative", "React", "UI", "state", "DOM", "manipulation", "functional"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which bundler feature allows loading modules only when needed?",
                options: [
                    "Code splitting",
                    "Dynamic imports",
                    "Lazy loading",
                    "All of the above"
                ],
                correctAnswer: 3,
                points: 20
            },
            {
                type: "scenario",
                question: "Build a component library with theming support, documentation, automated testing, and versioned releases.",
                keywords: ["component", "library", "theme", "Storybook", "documentation", "test", "version", "publish", "npm"],
                points: 30
            },
            {
                type: "text",
                question: "Explain how modern JavaScript frameworks achieve reactivity and automatic UI updates.",
                keywords: ["reactivity", "reactive", "proxy", "observable", "dependency", "tracking", "update", "framework"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is the recommended approach for managing global state in a large Next.js application?",
                options: [
                    "Redux Toolkit",
                    "Zustand or Jotai",
                    "React Context",
                    "Depends on use case"
                ],
                correctAnswer: 3,
                points: 20
            },
            {
                type: "scenario",
                question: "Design and implement a comprehensive error boundary system with graceful degradation and error reporting.",
                keywords: ["error", "boundary", "React", "fallback", "graceful", "degradation", "catch", "reporting", "Sentry"],
                points: 30
            },
            {
                type: "text",
                question: "Explain the implications of JavaScript's single-threaded nature and strategies to work around it.",
                keywords: ["single", "threaded", "blocking", "async", "worker", "concurrent", "event", "loop", "non-blocking"],
                points: 25
            }
        ]
    },

    // Full Stack Developer - Same comprehensive structure (85 questions)
    "Full Stack Developer": {
        easy: [
            {
                type: "mcq",
                question: "What does REST stand for?",
                options: [
                    "Real Estate Transfer",
                    "Representational State Transfer",
                    "Remote Execution State Transfer",
                    "Representational System Transfer"
                ],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "mcq",
                question: "Which HTTP method is used to retrieve data?",
                options: ["POST", "PUT", "GET", "DELETE"],
                correctAnswer: 2,
                points: 10
            },
            {
                type: "text",
                question: "What is the difference between SQL and NoSQL databases?",
                keywords: ["SQL", "NoSQL", "relational", "schema", "structured", "flexible", "document", "MongoDB"],
                points: 15
            },
            {
                type: "mcq",
                question: "Which status code indicates a successful HTTP request?",
                options: ["404", "500", "200", "301"],
                correctAnswer: 2,
                points: 10
            },
            {
                type: "scenario",
                question: "A user reports they can't login to your application. What steps would you take to troubleshoot the issue?",
                keywords: ["log", "error", "console", "network", "database", "authentication", "debug", "verify"],
                points: 15
            },
            {
                type: "mcq",
                question: "What is JSON used for in web development?",
                options: [
                    "Styling webpages",
                    "Data interchange format",
                    "Database queries",
                    "User authentication"
                ],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "text",
                question: "Explain what an API is and why it's important in full stack development.",
                keywords: ["API", "interface", "communication", "frontend", "backend", "endpoint", "request", "response"],
                points: 15
            },
            {
                type: "mcq",
                question: "Which HTTP method is used to update an existing resource?",
                options: ["GET", "POST", "PUT", "DELETE"],
                correctAnswer: 2,
                points: 10
            },
            {
                type: "scenario",
                question: "Your application is slow when loading user data. What initial checks would you perform?",
                keywords: ["database", "query", "network", "index", "cache", "optimize", "performance", "slow"],
                points: 15
            },
            {
                type: "mcq",
                question: "What does MVC stand for?",
                options: [
                    "Model View Controller",
                    "Multiple View Control",
                    "Model Variable Control",
                    "Modern View Component"
                ],
                correctAnswer: 0,
                points: 10
            },
            {
                type: "text",
                question: "What is the purpose of environment variables in applications?",
                keywords: ["environment", "variable", "configuration", "secret", "API", "key", "deploy", "secure"],
                points: 15
            },
            {
                type: "mcq",
                question: "Which tool is commonly used for version control?",
                options: ["Docker", "Git", "npm", "Webpack"],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "scenario",
                question: "A POST request to create a user is failing with status 500. How would you debug this?",
                keywords: ["error", "log", "server", "console", "request", "body", "validation", "database"],
                points: 15
            },
            {
                type: "mcq",
                question: "What is localhost typically represented as?",
                options: ["192.168.1.1", "127.0.0.1", "0.0.0.0", "10.0.0.1"],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "text",
                question: "Explain the difference between frontend and backend development.",
                keywords: ["frontend", "backend", "client", "server", "UI", "database", "API", "logic"],
                points: 15
            }
        ],
        medium: [
            {
                type: "scenario",
                question: "Design a user authentication system with email verification and password reset functionality. Explain your security measures.",
                keywords: ["JWT", "token", "hash", "bcrypt", "salt", "email", "verification", "reset", "password", "security"],
                points: 20
            },
            {
                type: "text",
                question: "Explain the concept of middleware in web applications and provide use cases.",
                keywords: ["middleware", "request", "response", "authentication", "logging", "error", "handling", "chain"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which database relationship allows multiple records in one table to relate to multiple records in another?",
                options: ["One-to-One", "One-to-Many", "Many-to-Many", "None-to-Many"],
                correctAnswer: 2,
                points: 15
            },
            {
                type: "scenario",
                question: "Your API is receiving too many requests from certain users. How would you implement rate limiting?",
                keywords: ["rate", "limiting", "throttle", "Redis", "token", "bucket", "IP", "user", "window"],
                points: 20
            },
            {
                type: "text",
                question: "What is CORS and why is it important? How do you handle it?",
                keywords: ["CORS", "cross-origin", "security", "header", "Access-Control", "Allow", "Origin", "browser"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which HTTP status code indicates unauthorized access?",
                options: ["400", "401", "403", "404"],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "text",
                question: "Explain RESTful API design principles and best practices.",
                keywords: ["REST", "resource", "endpoint", "HTTP", "method", "stateless", "CRUD", "convention"],
                points: 20
            },
            {
                type: "scenario",
                question: "Design a notification system that sends emails and push notifications for important events.",
                keywords: ["notification", "email", "push", "queue", "async", "template", "service", "worker"],
                points: 20
            },
            {
                type: "mcq",
                question: "What is the purpose of JWT in authentication?",
                options: [
                    "Encrypt passwords",
                    "Stateless authentication tokens",
                    "Database connection",
                    "Session storage"
                ],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "text",
                question: "Explain database normalization and its importance in full stack development.",
                keywords: ["normalization", "redundancy", "reduce", "consistency", "1NF", "2NF", "3NF", "relationship"],
                points: 20
            },
            {
                type: "scenario",
                question: "Implement a file upload system with validation, virus scanning, and cloud storage integration.",
                keywords: ["file", "upload", "validation", "size", "type", "scan", "S3", "cloud", "storage"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which principle suggests one function should do one thing well?",
                options: [
                    "DRY",
                    "KISS",
                    "Single Responsibility",
                    "Open/Closed"
                ],
                correctAnswer: 2,
                points: 15
            },
            {
                type: "text",
                question: "What is the difference between monolithic and microservices architecture?",
                keywords: ["monolithic", "microservices", "architecture", "service", "independent", "scalable", "deploy"],
                points: 20
            },
            {
                type: "scenario",
                question: "Build a real-time chat application. What technologies and architecture would you use?",
                keywords: ["WebSocket", "Socket.io", "real-time", "chat", "message", "database", "online", "presence"],
                points: 20
            },
            {
                type: "mcq",
                question: "What is the purpose of indexing in databases?",
                options: [
                    "Store data",
                    "Speed up queries",
                    "Backup data",
                    "Encrypt data"
                ],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "text",
                question: "Explain the concept of API versioning and why it's necessary.",
                keywords: ["API", "versioning", "backward", "compatible", "breaking", "change", "version", "endpoint"],
                points: 20
            },
            {
                type: "scenario",
                question: "Design a search functionality with autocomplete and filters for an e-commerce application.",
                keywords: ["search", "autocomplete", "filter", "elasticsearch", "query", "index", "relevance", "suggest"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which of these is NOT a NoSQL database?",
                options: ["MongoDB", "Redis", "PostgreSQL", "Cassandra"],
                correctAnswer: 2,
                points: 15
            },
            {
                type: "text",
                question: "What are WebSockets and when would you use them instead of HTTP?",
                keywords: ["WebSocket", "real-time", "bidirectional", "persistent", "connection", "HTTP", "chat", "live"],
                points: 20
            },
            {
                type: "scenario",
                question: "Implement a caching strategy for frequently accessed data to reduce database load.",
                keywords: ["cache", "Redis", "Memcached", "strategy", "TTL", "invalidation", "performance", "layer"],
                points: 20
            },
            {
                type: "mcq",
                question: "What is the purpose of Docker in full stack development?",
                options: [
                    "Version control",
                    "Containerization",
                    "Database management",
                    "Code compilation"
                ],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "text",
                question: "Explain the difference between authentication and authorization with examples.",
                keywords: ["authentication", "authorization", "identity", "permission", "verify", "access", "role"],
                points: 20
            },
            {
                type: "scenario",
                question: "Design a payment processing system with transaction handling and error recovery.",
                keywords: ["payment", "transaction", "atomic", "rollback", "idempotent", "stripe", "webhook", "retry"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which testing approach tests the entire application flow?",
                options: [
                    "Unit testing",
                    "Integration testing",
                    "End-to-end testing",
                    "Component testing"
                ],
                correctAnswer: 2,
                points: 15
            },
            {
                type: "text",
                question: "What is the purpose of load balancing in web applications?",
                keywords: ["load", "balancer", "distribute", "traffic", "server", "availability", "scalability", "fail"],
                points: 20
            },
            {
                type: "scenario",
                question: "Implement a role-based access control (RBAC) system for different user types.",
                keywords: ["RBAC", "role", "permission", "access", "control", "user", "authorization", "middleware"],
                points: 20
            },
            {
                type: "mcq",
                question: "What does ACID stand for in database transactions?",
                options: [
                    "Atomicity, Consistency, Isolation, Durability",
                    "Access, Control, Identity, Data",
                    "Authentication, Consistency, Integration, Design",
                    "Atomic, Complete, Integrated, Durable"
                ],
                correctAnswer: 0,
                points: 15
            },
            {
                type: "text",
                question: "Explain session management and the difference between session and token-based authentication.",
                keywords: ["session", "token", "stateful", "stateless", "JWT", "cookie", "authentication", "server"],
                points: 20
            },
            {
                type: "scenario",
                question: "Build a data export system that generates CSV/Excel files from database records.",
                keywords: ["export", "CSV", "Excel", "generate", "query", "stream", "download", "format"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which design pattern is used to create objects without specifying their exact class?",
                options: [
                    "Singleton",
                    "Factory",
                    "Observer",
                    "Strategy"
                ],
                correctAnswer: 1,
                points: 15
            }
        ],
        hard: [
            {
                type: "scenario",
                question: "Design a messaging system like WhatsApp. Include real-time delivery, read receipts, media handling, and offline support. Explain your tech stack choices.",
                keywords: ["WebSocket", "queue", "message", "real-time", "database", "CDN", "notification", "offline", "sync", "encryption"],
                points: 30
            },
            {
                type: "text",
                question: "Explain database sharding, when it's necessary, and the challenges it introduces.",
                keywords: ["sharding", "horizontal", "partition", "distributed", "database", "scalability", "shard", "key", "challenge"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which architectural pattern separates reads and writes in high-scale applications?",
                options: ["MVC", "CQRS", "Observer", "Singleton"],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Your application needs to process millions of user-uploaded images (resize, compress, add watermarks). Design a scalable solution.",
                keywords: ["queue", "worker", "async", "S3", "CDN", "Lambda", "serverless", "batch", "parallel", "storage"],
                points: 30
            },
            {
                type: "text",
                question: "Describe the CAP theorem and explain how it affects distributed system design.",
                keywords: ["CAP", "consistency", "availability", "partition", "tolerance", "distributed", "tradeoff", "eventual"],
                points: 25
            },
            {
                type: "scenario",
                question: "Design a multi-tenant SaaS platform where each tenant has isolated data and custom configurations.",
                keywords: ["multi-tenant", "SaaS", "isolation", "database", "schema", "configuration", "tenant", "security"],
                points: 30
            },
            {
                type: "text",
                question: "Explain event-driven architecture and its advantages over traditional request-response patterns.",
                keywords: ["event", "driven", "architecture", "async", "decoupled", "scalable", "message", "broker", "pub", "sub"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which consistency model guarantees that all replicas eventually agree on the same value?",
                options: [
                    "Strong consistency",
                    "Eventual consistency",
                    "Causal consistency",
                    "Sequential consistency"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Build a recommendation engine that provides personalized content based on user behavior and preferences.",
                keywords: ["recommendation", "engine", "collaborative", "filtering", "content-based", "machine", "learning", "personalization"],
                points: 30
            },
            {
                type: "text",
                question: "Describe GraphQL and how it differs from REST. When would you choose one over the other?",
                keywords: ["GraphQL", "REST", "query", "schema", "over-fetching", "under-fetching", "flexibility", "endpoint"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is the primary purpose of a message queue in distributed systems?",
                options: [
                    "Store data permanently",
                    "Async communication between services",
                    "Cache frequently accessed data",
                    "Load balancing"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Design a rea-time analytics dashboard that processes and visualizes millions of events per second.",
                keywords: ["real-time", "analytics", "stream", "processing", "Kafka", "aggregation", "dashboard", "visualization", "time-series"],
                points: 30
            },
            {
                type: "text",
                question: "Explain the saga pattern for managing distributed transactions across microservices.",
                keywords: ["saga", "pattern", "distributed", "transaction", "microservices", "compensating", "choreography", "orchestration"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which database type is optimized for time-series data?",
                options: [
                    "Relational (PostgreSQL)",
                    "Document (MongoDB)",
                    "Time-series (InfluxDB)",
                    "Graph (Neo4j)"
                ],
                correctAnswer: 2,
                points: 20
            },
            {
                type: "scenario",
                question: "Implement a comprehensive API gateway that handles authentication, rate limiting, caching, and request transformation.",
                keywords: ["API", "gateway", "authentication", "rate", "limiting", "cache", "transform", "routing", "Kong"],
                points: 30
            },
            {
                type: "text",
                question: "Describe blue-green deployment and canary releases. When would you use each strategy?",
                keywords: ["blue-green", "canary", "deployment", "release", "strategy", "zero", "downtime", "rollback", "gradual"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is the purpose of a reverse proxy in web architecture?",
                options: [
                    "Cache static files only",
                    "Load balancing and SSL termination",
                    "Database connection pooling",
                    "Code compilation"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Design a disaster recovery plan with automatic failover for a critical application. Include RTO and RPO requirements.",
                keywords: ["disaster", "recovery", "failover", "RTO", "RPO", "backup", "replication", "multi-region", "automated"],
                points: 30
            },
            {
                type: "text",
                question: "Explain database replication strategies: master-slave, master-master, and their trade-offs.",
                keywords: ["replication", "master", "slave", "master-master", "read", "replica", "write", "conflict", "consistency"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which pattern handles cascading failures in microservices?",
                options: [
                    "Singleton",
                    "Factory",
                    "Circuit Breaker",
                    "Observer"
                ],
                correctAnswer: 2,
                points: 20
            },
            {
                type: "scenario",
               question: "Build a content management system (CMS) with versioning, workflow approvals, and scheduled publishing.",
                keywords: ["CMS", "version", "control", "workflow", "approval", "schedule", "publish", "content", "draft"],
                points: 30
            },
            {
                type: "text",
                question: "Describe the twelve-factor app methodology and its relevance to modern cloud applications.",
                keywords: ["twelve-factor", "app", "methodology", "cloud", "config", "dependency", "stateless", "port", "binding"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is the main advantage of serverless architecture?",
                options: [
                    "No servers involved",
                    "Auto-scaling and pay-per-use",
                    "Faster execution",
                    "Better security"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Design a comprehensive logging and monitoring solution for a distributed system with alerting capabilities.",
                keywords: ["logging", "monitoring", "distributed", "tracing", "ELK", "Prometheus", "Grafana", "alert", "metric"],
                points: 30
            },
            {
                type: "text",
                question: "Explain eventual consistency and its implications in distributed databases.",
                keywords: ["eventual", "consistency", "distributed", "database", "asynchronous", "replication", "CAP", "conflict"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which security header helps prevent XSS attacks?",
                options: [
                    "X-Frame-Options",
                    "Content-Security-Policy",
                    "Strict-Transport-Security",
                    "X-Content-Type-Options"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Implement a global CDN strategy with edge caching, dynamic content acceleration, and DDoS protection.",
                keywords: ["CDN", "edge", "cache", "global", "acceleration", "DDoS", "CloudFlare", "performance", "distribution"],
                points: 30
            },
            {
                type: "text",
                question: "Describe service mesh architecture and when it's beneficial in microservices.",
                keywords: ["service", "mesh", "Istio", "sidecar", "proxy", "microservices", "traffic", "management", "observability"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is the purpose of idempotency in API design?",
                options: [
                    "Faster processing",
                    "Safe retry of operations",
                    "Better caching",
                    "Reduced payload size"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Design a video streaming platform with adaptive bitrate streaming, CDN integration, and DRM protection.",
                keywords: ["video", "streaming", "adaptive", "bitrate", "HLS", "DASH", "CDN", "DRM", "transcoding"],
                points: 30
            },
            {
                type: "text",
                question: "Explain database connection pooling and its importance in high-traffic applications.",
                keywords: ["connection", "pool", "database", "reuse", "performance", "limit", "overhead", "concurrent"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which caching strategy stores data only when it's first requested?",
                options: [
                    "Write-through",
                    "Write-behind",
                    "Cache-aside",
                    "Refresh-ahead"
                ],
                correctAnswer: 2,
                points: 20
            },
            {
                type: "scenario",
                question: "Build a distributed task scheduler that ensures tasks execute exactly once across multiple workers.",
                keywords: ["distributed", "scheduler", "task", "exactly", "once", "worker", "coordination", "lease", "lock"],
                points: 30
            },
            {
                type: "text",
                question: "Describe the strangler fig pattern for migrating legacy systems to modern architecture.",
                keywords: ["strangler", "fig", "pattern", "migration", "legacy", "gradual", "replacement", "coexist", "modern"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is the primary purpose of OAuth 2.0?",
                options: [
                    "Password encryption",
                    "Delegated authorization",
                    "Session management",
                    "Database security"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Design an audit logging system that tracks all critical operations and maintains compliance with regulations.",
                keywords: ["audit", "log", "compliance", "immutable", "tracking", "critical", "operation", "GDPR", "regulatory"],
                points: 30
            },
            {
                type: "text",
                question: "Explain the differences between horizontal and vertical scaling and when to use each.",
                keywords: ["horizontal", "vertical", "scaling", "scale", "out", "up", "distributed", "capacity", "performance"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which protocol is commonly used for real-time bidirectional communication?",
                options: [
                    "HTTP/1.1",
                    "HTTP/2",
                    "WebSocket",
                    "FTP"
                ],
                correctAnswer: 2,
                points: 20
            },
            {
                type: "scenario",
                question: "Implement a sophisticated rate limiting system with different tiers and quotas per user and API endpoint.",
                keywords: ["rate", "limiting", "tier", "quota", "user", "endpoint", "token", "bucket", "leaky", "bucket"],
                points: 30
            },
            {
                type: "text",
                question: "Describe the benefits and challenges of adopting a microservices architecture.",
                keywords: ["microservices", "benefit", "challenge", "scalability", "complexity", "deployment", "communication", "distributed"],
                points: 25
            }
        ]
    },

    // Backend Developer (60 questions: 15+20+25)
    "Backend Developer": {
        easy: [
            {
                type: "mcq",
                question: "What is an API?",
                options: [
                    "Application Programming Interface",
                    "Advanced Program Integration",
                    "Application Process Interface",
                    "Automated Programming Interface"
                ],
                correctAnswer: 0,
                points: 10
            },
            {
                type: "mcq",
                question: "Which HTTP status code means 'Not Found'?",
                options: ["200", "404", "500", "403"],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "text",
                question: "What is the difference between authentication and authorization?",
                keywords: ["authentication", "authorization", "identity", "verify", "permission", "access", "who", "what"],
                points: 15
            },
            {
                type: "mcq",
                question: "Which SQL command is used to retrieve data?",
                options: ["GET", "SELECT", "RETRIEVE", "FETCH"],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "scenario",
                question: "Your API endpoint is timing out. What could be the possible causes?",
                keywords: ["database", "query", "slow", "timeout", "network", "connection", "index", "optimization"],
                points: 15
            },
            {
                type: "mcq",
                question: "What does REST stand for?",
                options: [
                    "Remote Execution State Transfer",
                    "Representational State Transfer",
                    "Real Estate Service Transfer",
                    "Resource Execution State Transfer"
                ],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "mcq",
                question: "Which HTTP method is idempotent?",
                options: ["POST", "PUT", "PATCH", "All methods"],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "text",
                question: "What is the purpose of a database index?",
                keywords: ["index", "speed", "performance", "query", "faster", "search", "lookup", "optimization"],
                points: 15
            },
            {
                type: "mcq",
                question: "Which port is default for HTTPS?",
                options: ["80", "8080", "443", "3000"],
                correctAnswer: 2,
                points: 10
            },
            {
                type: "scenario",
                question: "A user cannot access a specific resource. How would you debug this authorization issue?",
                keywords: ["permission", "role", "token", "check", "log", "auth", "policy", "access"],
                points: 15
            },
            {
                type: "mcq",
                question: "What is JSON primarily used for?",
                options: [
                    "Styling web pages",
                    "Data interchange",
                    "Database queries",
                    "Server configuration"
                ],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "text",
                question: "Explain the difference between SQL and NoSQL databases.",
                keywords: ["SQL", "NoSQL", "relational", "schema", "structured", "flexible", "document", "scalability"],
                points: 15
            },
            {
                type: "mcq",
                question: "Which status code indicates server error?",
                options: ["2xx", "3xx", "4xx", "5xx"],
                correctAnswer: 3,
                points: 10
            },
            {
                type: "scenario",
                question: "Your database queries are slow. What are the first things you would check?",
                keywords: ["index", "query", "execution", "plan", "optimization", "slow", "log", "analyze"],
                points: 15
            },
            {
                type: "mcq",
                question: "What is middleware in backend development?",
                options: [
                    "Database software",
                    "Functions that process requests/responses",
                    "Frontend framework",
                    "Testing tool"
                ],
                correctAnswer: 1,
                points: 10
            }
        ],
        medium: [
            {
                type: "scenario",
                question: "Design a file upload system that handles large files (up to 5GB). Explain your approach to handle reliability and resumable uploads.",
                keywords: ["chunk", "multipart", "S3", "resume", "hash", "progress", "storage", "stream"],
                points: 20
            },
            {
                type: "text",
                question: "Explain database indexing and how it improves query performance.",
                keywords: ["index", "B-tree", "performance", "query", "faster", "search", "database", "tradeoff"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which design pattern ensures a class has only one instance?",
                options: ["Factory", "Singleton", "Observer", "Strategy"],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "You need to send 1 million emails for a marketing campaign. How would you design this system?",
                keywords: ["queue", "batch", "async", "worker", "rate", "limit", "retry", "SES", "email", "service"],
                points: 20
            },
            {
                type: "text",
                question: "What is database normalization and why is it important?",
                keywords: ["normalization", "redundancy", "reduce", "data", "integrity", "1NF", "2NF", "3NF", "relationship"],
                points: 20
            },
            {
                type: "mcq",
                question: "What is the purpose of a message queue?",
                options: [
                    "Store user sessions",
                    "Async communication between services",
                    "Cache database queries",
                    "Handle HTTP requests"
                ],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "Implement a caching layer for frequently accessed data. What strategies would you use?",
                keywords: ["cache", "Redis", "Memcached", "TTL", "invalidation", "strategy", "hit", "miss"],
                points: 20
            },
            {
                type: "text",
                question: "Explain the difference between optimistic and pessimistic locking.",
                keywords: ["optimistic", "pessimistic", "locking", "concurrency", "transaction", "version", "conflict", "database"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which HTTP method should be used to update a resource partially?",
                options: ["PUT", "PATCH", "POST", "UPDATE"],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "Design an API rate limiting system to prevent abuse.",
                keywords: ["rate", "limit", "throttle", "Redis", "token", "bucket", "sliding", "window", "IP"],
                points: 20
            },
            {
                type: "text",
                question: "What is the N+1 query problem and how do you solve it?",
                keywords: ["N+1", "query", "problem", "eager", "loading", "join", "optimize", "relationship", "performance"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which status code should be returned for successful resource creation?",
                options: ["200 OK", "201 Created", "202 Accepted", "204 No Content"],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "Build a logging system that categorizes errors by severity and sends alerts.",
                keywords: ["logging", "severity", "level", "alert", "error", "warning", "info", "notification"],
                points: 20
            },
            {
                type: "text",
                question: "Explain database connection pooling and its benefits.",
                keywords: ["connection", "pool", "reuse", "performance", "database", "overhead", "limit", "concurrent"],
                points: 20
            },
            {
                type: "mcq",
                question: "What is the primary purpose of Docker in backend development?",
                options: [
                    "Version control",
                    "Containerization",
                    "Database management",
                    "API testing"
                ],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "Design a session management system that works across multiple servers.",
                keywords: ["session", "distributed", "Redis", "database", "token", "stateless", "share", "cluster"],
                points: 20
            },
            {
                type: "text",
                question: "What are database transactions and why are they important?",
                keywords: ["transaction", "ACID", "atomic", "consistency", "rollback", "commit", "integrity"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which principle suggests not repeating code?",
                options: ["SOLID", "DRY", "KISS", "YAGNI"],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "Implement authentication with JWT tokens. Include refresh token logic.",
                keywords: ["JWT", "token", "authentication", "refresh", "access", "expire", "secure", "sign"],
                points: 20
            },
            {
                type: "text",
                question: "Explain the difference between vertical and horizontal scaling.",
                keywords: ["vertical", "horizontal", "scaling", "scale", "up", "out", "distributed", "performance"],
                points: 20
            }
        ],
        hard: [
            {
                type: "scenario",
                question: "Design a distributed caching system similar to Redis that handles cache invalidation, replication, and high availability.",
                keywords: ["distributed", "cache", "Redis", "invalidation", "consistency", "replication", "cluster", "failover", "sharding"],
                points: 30
            },
            {
                type: "text",
                question: "Explain the differences between optimistic and pessimistic locking in databases and when to use each.",
                keywords: ["optimistic", "pessimistic", "locking", "concurrency", "transaction", "version", "conflict", "database"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which consistency model guarantees that all nodes see the same data at the same time?",
                options: ["Eventual Consistency", "Strong Consistency", "Weak Consistency", "Causal Consistency"],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Design a logging and monitoring system for a distributed application with 100+ services. What metrics would you track and how?",
                keywords: ["log", "monitoring", "metric", "distributed", "tracing", "ELK", "Prometheus", "Grafana", "alert", "APM"],
                points: 30
            },
            {
                type: "text",
                question: "Explain event sourcing and its advantages over traditional CRUD operations.",
                keywords: ["event", "sourcing", "CQRS", "audit", "log", "replay", "immutable", "state", "stream"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which pattern handles cascading failures in microservices?",
                options: ["Singleton", "Factory", "Circuit Breaker", "Observer"],
                correctAnswer: 2,
                points: 20
            },
            {
                type: "scenario",
                question: "Build a distributed lock mechanism for coordinating tasks across multiple workers processing the same queue.",
                keywords: ["distributed", "lock", "Redis", "mutex", "atomic", "worker", "coordination", "deadlock", "TTL"],
                points: 30
            },
            {
                type: "text",
                question: "Describe database sharding strategies and when sharding becomes necessary.",
                keywords: ["sharding", "partition", "horizontal", "distributed", "database", "scalability", "shard", "key", "routing"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is the main benefit of using message queues in microservices?",
                options: [
                    "Faster processing",
                    "Decoupling and async communication",
                    "Better security",
                    "Reduced code"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Design a data pipeline that ingests, transforms, and loads (ETL) large datasets from multiple sources.",
                keywords: ["ETL", "pipeline", "extract", "transform", "load", "batch", "stream", "data", "warehouse", "queue"],
                points: 30
            },
            {
                type: "text",
                question: "Explain the saga pattern for managing distributed transactions across microservices.",
                keywords: ["saga", "pattern", "distributed", "transaction", "microservices", "compensating", "choreography", "orchestration"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which database type is optimized for graph relationships?",
                options: ["Relational", "Document", "Graph", "Key-Value"],
                correctAnswer: 2,
                points: 20
            },
            {
                type: "scenario",
                question: "Implement a comprehensive API gateway with authentication, rate limiting, caching, and request transformation.",
                keywords: ["API", "gateway", "authentication", "rate", "limiting", "cache", "transform", "routing", "proxy"],
                points: 30
            },
            {
                type: "text",
                question: "Describe the CAP theorem and its implications for distributed systems.",
                keywords: ["CAP", "consistency", "availability", "partition", "tolerance", "distributed", "tradeoff", "theorem"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is the primary purpose of a reverse proxy?",
                options: [
                    "Cache static files",
                    "Load balancing and SSL termination",
                    "Database pooling",
                    "Code compilation"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Design a real-time analytics system that processes millions of events per second.",
                keywords: ["real-time", "analytics", "stream", "processing", "Kafka", "aggregation", "windowing", "scale"],
                points: 30
            },
            {
                type: "text",
                question: "Explain database replication strategies: master-slave vs master-master.",
                keywords: ["replication", "master", "slave", "master-master", "read", "replica", "write", "conflict", "consistency"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which HTTP header is used to prevent CSRF attacks?",
                options: [
                    "X-Content-Type-Options",
                    "X-CSRF-Token",
                    "Content-Security-Policy",
                    "Strict-Transport-Security"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Build a distributed task scheduler that ensures tasks execute exactly once even if workers fail.",
                keywords: ["distributed", "scheduler", "exactly", "once", "worker", "coordination", "lease", "lock", "fault", "tolerant"],
                points: 30
            },
            {
                type: "text",
                question: "Explain the strangler fig pattern for migrating legacy systems.",
                keywords: ["strangler", "fig", "pattern", "migration", "legacy", "gradual", "replacement", "coexist", "incremental"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is the recommended way to prevent SQL injection?",
                options: [
                    "Input validation only",
                    "Prepared statements with parameterized queries",
                    "String escaping",
                    "Stored procedures only"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Design a multi-region active-active architecture with data consistency guarantees.",
                keywords: ["multi-region", "active", "active", "replication", "consistency", "conflict", "resolution", "latency", "distributed"],
                points: 30
            },
            {
                type: "text",
                question: "Describe CQRS pattern and when it should be implemented.",
                keywords: ["CQRS", "command", "query", "responsibility", "segregation", "write", "read", "model", "separate"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which technique provides the best security for API keys?",
                options: [
                    "Hardcode in source",
                    "Environment variables",
                    "Config files in repo",
                    "Database storage"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Implement a comprehensive backup and disaster recovery plan with automated testing.",
                keywords: ["backup", "disaster", "recovery", "RTO", "RPO", "automated", "test", "restore", "snapshot"],
                points: 30
            }
        ]
    },

    // Data Scientist (60 questions: 15+20+25)
    "Data Scientist": {
        easy: [
            {
                type: "mcq",
                question: "What does CSV stand for?",
                options: [
                    "Computer Separated Values",
                    "Comma Separated Values",
                    "Character Separated Values",
                    "Code Separated Values"
                ],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "mcq",
                question: "Which Python library is commonly used for data manipulation?",
                options: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "text",
                question: "What is the difference between supervised and unsupervised learning?",
                keywords: ["supervised", "unsupervised", "label", "training", "classification", "clustering", "data", "target"],
                points: 15
            },
            {
                type: "mcq",
                question: "What is the purpose of train-test split in machine learning?",
                options: [
                    "To make training faster",
                    "To evaluate model performance",
                    "To clean the data",
                    "To create more data"
                ],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "scenario",
                question: "You have a dataset with many missing values. What approaches would you consider?",
                keywords: ["missing", "impute", "mean", "median", "drop", "fill", "interpolate", "data", "handling"],
                points: 15
            },
            {
                type: "mcq",
                question: "What is a DataFrame in Pandas?",
                options: [
                    "A type of chart",
                    "A 2D labeled data structure",
                    "A machine learning algorithm",
                    "A database table"
                ],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "mcq",
                question: "Which metric is used for classification accuracy?",
                options: ["MSE", "R-squared", "Accuracy score", "MAE"],
                correctAnswer: 2,
                points: 10
            },
            {
                type: "text",
                question: "What is overfitting in machine learning?",
                keywords: ["overfitting", "training", "test", "generalize", "complex", "model", "memorize", "noise"],
                points: 15
            },
            {
                type: "mcq",
                question: "What does numpy array allow that Python lists don't?",
                options: [
                    "Store strings",
                    "Vectorized operations",
                    "Store numbers",
                    "Loop through elements"
                ],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "scenario",
                question: "Your model has high training accuracy but low test accuracy. What might be wrong?",
                keywords: ["overfitting", "regularization", "validation", "data", "complexity", "generalization"],
                points: 15
            },
            {
                type: "mcq",
                question: "What is feature engineering?",
                options: [
                    "Building hardware",
                    "Creating new features from existing data",
                    "Selecting algorithms",
                    "Training models"
                ],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "text",
                question: "Explain what cross-validation is and why it's useful.",
                keywords: ["cross-validation", "fold", "training", "validation", "test", "generalization", "performance", "estimate"],
                points: 15
            },
            {
                type: "mcq",
                question: "Which algorithm is used for regression problems?",
                options: [
                    "K-means",
                    "Linear Regression",
                    "K-NN Classification",
                    "Apriori"
                ],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "scenario",
                question: "You need to visualize the relationship between two continuous variables. What plot would you use?",
                keywords: ["scatter", "plot", "visualization", "relationship", "correlation", "continuous", "variable"],
                points: 15
            },
            {
                type: "mcq",
                question: "What does SQL stand for?",
                options: [
                    "Structured Query Language",
                    "Simple Question Language",
                    "Standard Query Logic",
                    "System Query Language"
                ],
                correctAnswer: 0,
                points: 10
            }
        ],
        medium: [
            {
                type: "scenario",
                question: "A model you trained has 95% accuracy on training data but only 65% on test data. What could be the problem and how would you fix it?",
                keywords: ["overfitting", "regularization", "cross-validation", "data", "augmentation", "dropout", "complexity", "simplify"],
                points: 20
            },
            {
                type: "text",
                question: "Explain the bias-variance tradeoff in machine learning.",
                keywords: ["bias", "variance", "tradeoff", "underfitting", "overfitting", "error", "complexity", "balance"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which algorithm is best for finding patterns in unlabeled data?",
                options: ["Linear Regression", "K-means Clustering", "Decision Trees", "Logistic Regression"],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "You need to predict customer churn for a subscription service. Describe your end-to-end approach.",
                keywords: ["churn", "feature", "engineering", "model", "evaluation", "classification", "imbalanced", "predict", "pipeline"],
                points: 20
            },
            {
                type: "text",
                question: "What is feature engineering and why is it important?",
                keywords: ["feature", "engineering", "transform", "create", "model", "performance", "domain", "knowledge", "improve"],
                points: 20
            },
            {
                type: "mcq",
                question: "What is the purpose of regularization in machine learning?",
                options: [
                    "Make training faster",
                    "Prevent overfitting",
                    "Increase accuracy",
                    "Clean data"
                ],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "Design a feature selection process for a dataset with 1000 features.",
                keywords: ["feature", "selection", "correlation", "importance", "reduce", "dimensionality", "PCA", "variance"],
                points: 20
            },
            {
                type: "text",
                question: "Explain the difference between bagging and boosting ensemble methods.",
                keywords: ["bagging", "boosting", "ensemble", "random", "forest", "AdaBoost", "gradient", "boost", "weak", "learner"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which metric is appropriate for imbalanced classification?",
                options: ["Accuracy", "F1-score", "MSE", "R-squared"],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "Build a sentiment analysis system for customer reviews. What preprocessing steps would you take?",
                keywords: ["sentiment", "analysis", "NLP", "preprocessing", "tokenization", "stopwords", "lemmatization", "vectorization"],
                points: 20
            },
            {
                type: "text",
                question: "What is the curse of dimensionality and how do you address it?",
                keywords: ["curse", "dimensionality", "features", "distance", "sparse", "PCA", "feature", "selection", "reduction"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which algorithm is known for being interpretable?",
                options: ["Neural Networks", "Decision Trees", "SVM", "Deep Learning"],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "Implement a time series forecasting model for sales prediction. What considerations are important?",
                keywords: ["time", "series", "forecasting", "seasonality", "trend", "ARIMA", "LSTM", "lag", "features"],
                points: 20
            },
            {
                type: "text",
                question: "Explain precision, recall, and F1-score with examples.",
                keywords: ["precision", "recall", "F1", "score", "true", "positive", "false", "positive", "negative", "tradeoff"],
                points: 20
            },
            {
                type: "mcq",
                question: "What is the purpose of normalization in machine learning?",
                options: [
                    "Remove outliers",
                    "Scale features to similar ranges",
                    "Increase accuracy",
                    "Reduce training time"
                ],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "Design an A/B testing framework to measure the impact of a new feature.",
                keywords: ["A/B", "testing", "hypothesis", "statistical", "significance", "p-value", "sample", "size", "control"],
                points: 20
            },
            {
                type: "text",
                question: "What are the assumptions of linear regression?",
                keywords: ["linear", "regression", "assumption", "linearity", "independence", "homoscedasticity", "normality", "residual"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which technique is used to handle categorical variables?",
                options: [
                    "Normalization",
                    "One-hot encoding",
                    "Standardization",
                    "PCA"
                ],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "Build an anomaly detection system for fraud detection with highly imbalanced data.",
                keywords: ["anomaly", "detection", "fraud", "imbalanced", "isolation", "forest", "autoencoder", "threshold"],
                points: 20
            },
            {
                type: "text",
                question: "Explain how Random Forest works and its advantages over single decision trees.",
                keywords: ["random", "forest", "ensemble", "decision", "tree", "bootstrap", "aggregation", "bagging", "reduce", "variance"],
                points: 20
            }
        ],
        hard: [
            {
                type: "scenario",
                question: "Design a recommendation system for an e-commerce platform with millions of users and products. Explain your approach to handle cold start and scalability.",
                keywords: ["recommendation", "collaborative", "filtering", "content-based", "matrix", "factorization", "cold", "start", "scalability", "hybrid"],
                points: 30
            },
            {
                type: "text",
                question: "Explain gradient descent and its variants (SGD, Adam, RMSprop). When would you use each?",
                keywords: ["gradient", "descent", "SGD", "Adam", "RMSprop", "optimization", "learning", "rate", "momentum", "adaptive"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which technique is used to handle imbalanced datasets?",
                options: [
                    "All of the above",
                    "SMOTE",
                    "Class Weighting",
                    "Undersampling/Oversampling"
                ],
                correctAnswer: 0,
                points: 20
            },
            {
                type: "scenario",
                question: "Build a fraud detection system for credit card transactions. The fraudulent transactions are less than 0.1% of all transactions.",
                keywords: ["fraud", "detection", "imbalanced", "anomaly", "precision", "recall", "threshold", "cost", "sensitive", "ensemble"],
                points: 30
            },
            {
                type: "text",
                question: "Explain transfer learning in deep learning and its benefits.",
                keywords: ["transfer", "learning", "pre-trained", "fine-tuning", "feature", "extraction", "ImageNet", "domain", "adaptation"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is the vanishing gradient problem in deep neural networks?",
                options: [
                    "Gradients become too large",
                    "Gradients become very small in early layers",
                    "Loss function doesn't decrease",
                    "Model overfits"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Design a real-time ML system that serves predictions with < 100ms latency for millions of requests.",
                keywords: ["real-time", "ML", "latency", "serving", "optimization", "caching", "model", "compression", "inference"],
                points: 30
            },
            {
                type: "text",
                question: "Describe the attention mechanism in transformers and why it's revolutionary.",
                keywords: ["attention", "mechanism", "transformer", "self-attention", "NLP", "parallel", "context", "BERT", "GPT"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which architecture is best for sequential data?",
                options: ["CNN", "RNN/LSTM", "Fully Connected", "Autoencoder"],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Build an NLP system for multi-language sentiment analysis with limited training data per language.",
                keywords: ["NLP", "multi-language", "sentiment", "transfer", "learning", "cross-lingual", "BERT", "multilingual", "few-shot"],
                points: 30
            },
            {
                type: "text",
                question: "Explain feature store and its role in ML operations (MLOps).",
                keywords: ["feature", "store", "MLOps", "consistency", "reusability", "training", "serving", "pipeline", "central"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is model drift in production ML systems?",
                options: [
                    "Model training time increases",
                    "Model performance degrades over time",
                    "Model size increases",
                    "Model becomes interpretable"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Design an ML monitoring system that detects data drift, model drift, and performance degradation.",
                keywords: ["monitoring", "drift", "data", "model", "performance", "alert", "distribution", "statistical", "test"],
                points: 30
            },
            {
                type: "text",
                question: "Describe AutoML and how it democratizes machine learning.",
                keywords: ["AutoML", "automated", "hyperparameter", "tuning", "neural", "architecture", "search", "democratize", "accessible"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which technique is used to explain black-box ML models?",
                options: ["SHAP", "PCA", "t-SNE", "K-means"],
                correctAnswer: 0,
                points: 20
            },
            {
                type: "scenario",
                question: "Build a computer vision system for real-time object detection in autonomous vehicles.",
                keywords: ["computer", "vision", "object", "detection", "YOLO", "real-time", "CNN", "autonomous", "vehicle"],
                points: 30
            },
            {
                type: "text",
                question: "Explain contrastive learning and its applications.",
                keywords: ["contrastive", "learning", "self-supervised", "SimCLR", "embedding", "similarity", "representation"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is the purpose of batch normalization?",
                options: [
                    "Normalize input data",
                    "Stabilize and accelerate training",
                    "Prevent overfitting",
                    "Increase model capacity"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Design a graph neural network system for social network analysis and link prediction.",
                keywords: ["graph", "neural", "network", "GNN", "social", "network", "link", "prediction", "node", "embedding"],
                points: 30
            },
            {
                type: "text",
                question: "Describe federated learning and its privacy benefits.",
                keywords: ["federated", "learning", "privacy", "distributed", "on-device", "training", "aggregation", "secure"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which loss function is used for binary classification?",
                options: [
                    "Mean Squared Error",
                    "Binary Cross-Entropy",
                    "Mean Absolute Error",
                    "Hinge Loss"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Implement a reinforcement learning agent for game playing with sparse rewards.",
                keywords: ["reinforcement", "learning", "agent", "reward", "policy", "Q-learning", "sparse", "exploration", "exploitation"],
                points: 30
            },
            {
                type: "text",
                question: "Explain the concept of few-shot learning and meta-learning.",
                keywords: ["few-shot", "learning", "meta-learning", "learn", "to", "learn", "limited", "data", "transfer"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is the purpose of dropout in neural networks?",
                options: [
                    "Speed up training",
                    "Regularization to prevent overfitting",
                    "Increase accuracy",
                    "Reduce model size"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Build an end-to-end MLOps pipeline with model versioning, A/B testing, and automated retraining.",
                keywords: ["MLOps", "pipeline", "versioning", "A/B", "testing", "automated", "retraining", "CI/CD", "monitoring"],
                points: 30
            }
        ]
    },

    // DevOps Engineer (60 questions: 15+20+25)
    "DevOps Engineer": {
        easy: [
            {
                type: "mcq",
                question: "What does CI/CD stand for?",
                options: [
                    "Continuous Integration/Continuous Deployment",
                    "Code Integration/Code Deployment",
                    "Continuous Installation/Continuous Distribution",
                    "Computer Integration/Computer Deployment"
                ],
                correctAnswer: 0,
                points: 10
            },
            {
                type: "mcq",
                question: "Which tool is commonly used for containerization?",
                options: ["Jenkins", "Docker", "Git", "Terraform"],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "text",
                question: "What is the purpose of version control systems like Git?",
                keywords: ["version", "control", "Git", "history", "collaboration", "branch", "merge", "track", "changes"],
                points: 15
            },
            {
                type: "mcq",
                question: "Which command is used to list running containers in Docker?",
                options: ["docker list", "docker ps", "docker show", "docker containers"],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "scenario",
                question: "A production server is down. What are your first steps to investigate?",
                keywords: ["log", "monitoring", "status", "service", "restart", "health", "check", "alert", "troubleshoot"],
                points: 15
            },
            {
                type: "mcq",
                question: "What is Kubernetes primarily used for?",
                options: [
                    "Version control",
                    "Container orchestration",
                    "Database management",
                    "Code compilation"
                ],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "mcq",
                question: "Which port is default for HTTP?",
                options: ["443", "80", "8080", "3000"],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "text",
                question: "What is Infrastructure as Code (IaC)?",
                keywords: ["infrastructure", "code", "IaC", "automated", "Terraform", "Ansible", "version", "reproducible"],
                points: 15
            },
            {
                type: "mcq",
                question: "Which tool is used for configuration management?",
                options: ["Docker", "Ansible", "Kubernetes", "Git"],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "scenario",
                question: "Your application deployment failed. How would you rollback?",
                keywords: ["rollback", "previous", "version", "deployment", "backup", "restore", "revert", "safe"],
                points: 15
            },
            {
                type: "mcq",
                question: "What does YAML stand for?",
                options: [
                    "Yet Another Markup Language",
                    "YAML Ain't Markup Language",
                    "Young Application Markup Language",
                    "Your Automated Markup Language"
                ],
                correctAnswer: 1,
                points: 10
            },
            {
                type: "text",
                question: "Explain the difference between Docker image and container.",
                keywords: ["Docker", "image", "container", "template", "running", "instance", "immutable", "mutable"],
                points: 15
            },
            {
                type: "mcq",
                question: "Which service provides managed Kubernetes?",
                options: ["EC2", "S3", "EKS", "Lambda"],
                correctAnswer: 2,
                points: 10
            },
            {
                type: "scenario",
                question: "You need to check logs from a crashed container. What command would you use?",
                keywords: ["docker", "logs", "kubectl", "logs", "container", "pod", "troubleshoot", "debug"],
                points: 15
            },
            {
                type: "mcq",
                question: "What is a load balancer used for?",
                options: [
                    "Store data",
                    "Distribute traffic across servers",
                    "Monitor applications",
                    "Deploy code"
                ],
                correctAnswer: 1,
                points: 10
            }
        ],
        medium: [
            {
                type: "scenario",
                question: "Design a CI/CD pipeline for a web application from code commit to production deployment.",
                keywords: ["CI", "CD", "pipeline", "build", "test", "deploy", "automated", "Jenkins", "GitLab", "stage"],
                points: 20
            },
            {
                type: "text",
                question: "Explain Infrastructure as Code (IaC) and its benefits.",
                keywords: ["IaC", "infrastructure", "code", "Terraform", "Ansible", "version", "reproducible", "automated", "consistent"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which tool is used for container orchestration?",
                options: ["Docker", "Kubernetes", "Apache", "Nginx"],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "Your application needs zero-downtime deployment. What strategy would you use?",
                keywords: ["blue", "green", "rolling", "canary", "deployment", "zero", "downtime", "strategy", "gradual"],
                points: 20
            },
            {
                type: "text",
                question: "What is the difference between horizontal and vertical scaling?",
                keywords: ["horizontal", "vertical", "scaling", "instances", "resources", "distributed", "capacity", "scale", "out", "up"],
                points: 20
            },
            {
                type: "mcq",
                question: "What is the purpose of a Dockerfile?",
                options: [
                    "Configure Kubernetes",
                    "Define how to build a Docker image",
                    "Store environment variables",
                    "Monitor containers"
                ],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "Implement a monitoring and alerting system for a microservices architecture.",
                keywords: ["monitoring", "alerting", "Prometheus", "Grafana", "metric", "log", "microservices", "observability"],
                points: 20
            },
            {
                type: "text",
                question: "Explain the concept of immutable infrastructure.",
                keywords: ["immutable", "infrastructure", "replace", "not", "modify", "consistent", "reliable", "deploy"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which tool is used for secrets management?",
                options: ["Git", "HashiCorp Vault", "Docker", "Jenkins"],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "Design a backup strategy for a production database with RTO of 1 hour.",
                keywords: ["backup", "database", "RTO", "RPO", "snapshot", "automated", "restore", "recovery"],
                points: 20
            },
            {
                type: "text",
                question: "What is the purpose of a service mesh in microservices?",
                keywords: ["service", "mesh", "Istio", "sidecar", "traffic", "management", "observability", "security", "microservices"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which protocol do Kubernetes pods use to communicate?",
                options: ["HTTP only", "TCP/UDP", "FTP", "SSH"],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "Implement automated testing in your CI/CD pipeline. What types of tests would you include?",
                keywords: ["automated", "testing", "unit", "integration", "end-to-end", "CI", "CD", "pipeline", "quality"],
                points: 20
            },
            {
                type: "text",
                question: "Explain the concept of GitOps and its benefits.",
                keywords: ["GitOps", "Git", "declarative", "repository", "sync", "ArgoCD", "Flux", "kubernetes", "automated"],
                points: 20
            },
            {
                type: "mcq",
                question: "What is a StatefulSet in Kubernetes?",
                options: [
                    "For stateless applications",
                    "For stateful applications with persistent identity",
                    "For configuration",
                    "For networking"
                ],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "Configure auto-scaling for a web application based on CPU and memory usage.",
                keywords: ["auto-scaling", "HPA", "CPU", "memory", "metric", "kubernetes", "threshold", "elastic"],
                points: 20
            },
            {
                type: "text",
                question: "What are the benefits of using Docker Compose?",
                keywords: ["Docker", "Compose", "multi-container", "YAML", "orchestration", "local", "development", "define"],
                points: 20
            },
            {
                type: "mcq",
                question: "Which Kubernetes object is used to expose services?",
                options: ["Pod", "Service", "ConfigMap", "Volume"],
                correctAnswer: 1,
                points: 15
            },
            {
                type: "scenario",
                question: "Design a log aggregation system for distributed services.",
                keywords: ["log", "aggregation", "ELK", "Elasticsearch", "Logstash", "Kibana", "distributed", "centralized"],
                points: 20
            },
            {
                type: "text",
                question: "Explain the difference between ConfigMap and Secret in Kubernetes.",
                keywords: ["ConfigMap", "Secret", "configuration", "sensitive", "encrypted", "environment", "variable", "kubernetes"],
                points: 20
            }
        ],
        hard: [
            {
                type: "scenario",
                question: "Design a multi-region disaster recovery system for a critical application with RTO of 15 minutes and RPO of 5 minutes.",
                keywords: ["disaster", "recovery", "RTO", "RPO", "multi-region", "replication", "failover", "backup", "database", "automated"],
                points: 30
            },
            {
                type: "text",
                question: "Explain service mesh architecture and when you would implement it.",
                keywords: ["service", "mesh", "Istio", "sidecar", "proxy", "microservices", "traffic", "management", "observability", "security"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which pattern helps prevent cascading failures in microservices?",
                options: ["Singleton", "Circuit Breaker", "Factory", "Observer"],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Design a monitoring and alerting system for 100+ microservices. Include metrics, logs, and traces.",
                keywords: ["monitoring", "alert", "Prometheus", "Grafana", "ELK", "trace", "distributed", "observability", "metric", "Jaeger"],
                points: 30
            },
            {
                type: "text",
                question: "Explain GitOps and how it differs from traditional deployment methods.",
                keywords: ["GitOps", "Git", "declarative", "repository", "sync", "ArgoCD", "Flux", "continuous", "deployment", "kubernetes"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is the purpose of an Ingress Controller in Kubernetes?",
                options: [
                    "Manage pods",
                    "Route external traffic to services",
                    "Store secrets",
                    "Schedule jobs"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Implement a complete security hardening strategy for Kubernetes clusters.",
                keywords: ["security", "kubernetes", "RBAC", "network", "policy", "pod", "security", "scan", "hardening", "compliance"],
                points: 30
            },
            {
                type: "text",
                question: "Describe the differences between Docker Swarm and Kubernetes.",
                keywords: ["Docker", "Swarm", "Kubernetes", "orchestration", "complexity", "scalability", "ecosystem", "features"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which tool is best for Infrastructure as Code on multiple cloud providers?",
                options: ["CloudFormation", "Terraform", "ARM Templates", "Chef"],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Design a CI/CD pipeline with automated security scanning, testing, and compliance checks.",
                keywords: ["CI", "CD", "security", "scanning", "SAST", "DAST", "compliance", "automated", "testing", "pipeline"],
                points: 30
            },
            {
                type: "text",
                question: "Explain the concept of chaos engineering and how to implement it safely.",
                keywords: ["chaos", "engineering", "resilience", "failure", "testing", "production", "Chaos", "Monkey", "controlled"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is a DaemonSet in Kubernetes used for?",
                options: [
                    "Run a pod on every node",
                    "Manage secrets",
                    "Route traffic",
                    "Store configurations"
                ],
                correctAnswer: 0,
                points: 20
            },
            {
                type: "scenario",
                question: "Implement a complete observability stack with metrics, logs, traces, and visualization.",
                keywords: ["observability", "metric", "log", "trace", "Prometheus", "Grafana", "ELK", "Jaeger", "distributed", "tracing"],
                points: 30
            },
            {
                type: "text",
                question: "Describe the Operator pattern in Kubernetes and when to use it.",
                keywords: ["Operator", "pattern", "kubernetes", "custom", "controller", "CRD", "automate", "manage", "stateful"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which storage class provides the fastest performance in Kubernetes?",
                options: [
                    "NFS",
                    "Local SSD",
                    "EBS",
                    "S3"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Design a multi-tenant Kubernetes platform with namespace isolation and resource quotas.",
                keywords: ["multi-tenant", "kubernetes", "namespace", "isolation", "RBAC", "resource", "quota", "network", "policy"],
                points: 30
            },
            {
                type: "text",
                question: "Explain the concept of progressive delivery and feature flags.",
                keywords: ["progressive", "delivery", "feature", "flag", "canary", "release", "gradual", "rollout", "toggle"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is the purpose of Helm in Kubernetes?",
                options: [
                    "Monitor pods",
                    "Package manager for Kubernetes",
                    "Network routing",
                    "Storage management"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Implement a cost optimization strategy for cloud infrastructure with automated recommendations.",
                keywords: ["cost", "optimization", "cloud", "right-sizing", "reserved", "instance", "spot", "automated", "monitoring"],
                points: 30
            },
            {
                type: "text",
                question: "Describe the benefits and challenges of using serverless architecture.",
                keywords: ["serverless", "Lambda", "FaaS", "scalability", "cost", "cold", "start", "stateless", "event-driven"],
                points: 25
            },
            {
                type: "mcq",
                question: "Which tool is used for distributed tracing in microservices?",
                options: ["Prometheus", "Jaeger", "Kibana", "Ansible"],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Design a complete backup and disaster recovery solution with automated testing and validation.",
                keywords: ["backup", "disaster", "recovery", "automated", "testing", "validation", "RTO", "RPO", "restore", "drill"],
                points: 30
            },
            {
                type: "text",
                question: "Explain the concept of policy as code and tools like Open Policy Agent.",
                keywords: ["policy", "code", "OPA", "Open", "Policy", "Agent", "Rego", "compliance", "security", "automated"],
                points: 25
            },
            {
                type: "mcq",
                question: "What is the recommended approach for storing sensitive data in Kubernetes?",
                options: [
                    "ConfigMap",
                    "Secrets with encryption at rest",
                    "Environment variables",
                    "Hardcoded in image"
                ],
                correctAnswer: 1,
                points: 20
            },
            {
                type: "scenario",
                question: "Build a platform engineering solution that provides self-service infrastructure for development teams.",
                keywords: ["platform", "engineering", "self-service", "infrastructure", "portal", "automated", "provision", "developer", "experience"],
                points: 30
            }
        ]
    }
};

function wordsFromPhrase(text) {
    return (text || "")
        .toLowerCase()
        .match(/[a-z]+/g) || [];
}

function buildKeywords(competency, extras = []) {
    const merged = [...wordsFromPhrase(competency), ...extras.map(x => x.toLowerCase())];
    return [...new Set(merged)].slice(0, 12);
}

function buildCorporateRoleQuestions(role, profile) {
    const easy = [];
    const medium = [];
    const hard = [];
    const competencies = profile.competencies;
    const focus = profile.focus;

    const easyQuestionPatterns = [
        {
            type: "mcq",
            question: (competency) => `What is the first thing you should verify before starting ${competency} work in ${role}?`,
            options: (competency) => [
                `Objective, owner, and expected outcome for ${competency}`,
                "Ignore the requirements and begin immediately",
                "Wait until the deadline is near",
                "Avoid discussing it with stakeholders"
            ],
            correctAnswer: 0,
            points: 10
        },
        {
            type: "text",
            question: (competency) => `As a ${role}, explain how you handle ${competency} in daily work to improve ${focus}.`,
            keywords: (competency) => buildKeywords(competency, [focus, "communication", "planning", "stakeholder", "quality", "outcome"]),
            points: 15
        },
        {
            type: "scenario",
            question: (competency) => `You are working as a ${role}. A small issue appears in ${competency} and affects ${focus}. What do you do first?`,
            keywords: (competency) => buildKeywords(competency, [focus, "analyze", "prioritize", "action", "follow-up", "report"]),
            points: 15
        }
    ];

    const mediumQuestionPatterns = [
        {
            type: "mcq",
            question: (competency) => `Which planning step is most important when a ${role} manages ${competency} across multiple teams?`,
            options: () => [
                "Set scope, dependencies, and measurable checkpoints first",
                "Start without a shared plan",
                "Skip updates until the end",
                "Work without owners or milestones"
            ],
            correctAnswer: 0,
            points: 15
        },
        {
            type: "text",
            question: (competency) => `For the ${role} role, how would you improve ${competency} while balancing speed, quality, and ${focus}?`,
            keywords: (competency) => buildKeywords(competency, [focus, "tradeoff", "metric", "alignment", "efficiency", "quality", "risk"]),
            points: 20
        },
        {
            type: "scenario",
            question: (competency) => `As a ${role}, two teams disagree on ${competency}. How will you align stakeholders and protect ${focus} while moving execution forward?`,
            keywords: (competency) => buildKeywords(competency, [focus, "stakeholder", "alignment", "decision", "timeline", "impact", "communication"]),
            points: 20
        },
        {
            type: "mcq",
            question: (competency) => `Which indicator best shows whether ${competency} is working well for a ${role}?`,
            options: () => [
                `A clear KPI or service metric linked to ${focus}`,
                "More meetings on the calendar",
                "Longer email threads",
                "Fewer visible updates"
            ],
            correctAnswer: 0,
            points: 15
        },
        {
            type: "text",
            question: (competency) => `Describe a time when you would need to revise ${competency} because the ${role} priorities changed.`,
            keywords: (competency) => buildKeywords(competency, [focus, "revise", "priority", "scope", "change", "impact", "decision"]),
            points: 20
        },
        {
            type: "scenario",
            question: (competency) => `If ${competency} starts slipping, how would you recover performance without hurting ${focus}?`,
            keywords: (competency) => buildKeywords(competency, [focus, "recovery", "monitoring", "root cause", "action plan", "owner", "escalation"]),
            points: 20
        }
    ];

    const hardQuestionPatterns = [
        {
            type: "mcq",
            question: (competency) => `In high-pressure ${role} work, what protects ${competency} most effectively?`,
            options: () => [
                "Clear governance, risk review, and owner accountability",
                "Ad-hoc coordination only",
                "Delaying decisions until issues grow",
                "Avoiding stakeholder visibility"
            ],
            correctAnswer: 0,
            points: 20
        },
        {
            type: "scenario",
            question: (competency) => `You are a senior ${role}. A critical initiative is at risk due to issues in ${competency}. Outline your mitigation and recovery plan to protect ${focus}.`,
            keywords: (competency) => buildKeywords(competency, [focus, "governance", "mitigation", "recovery", "owner", "escalation", "execution", "monitoring"]),
            points: 30
        },
        {
            type: "text",
            question: (competency) => `Describe an advanced framework you would use as a ${role} to scale ${competency} and improve ${focus} across the organization.`,
            keywords: (competency) => buildKeywords(competency, [focus, "framework", "scaling", "kpi", "operating model", "continuous improvement", "strategy"]),
            points: 25
        },
        {
            type: "scenario",
            question: (competency) => `How would you redesign ${competency} if it had to support multiple departments without losing ${focus}?`,
            keywords: (competency) => buildKeywords(competency, [focus, "redesign", "multiple teams", "standardization", "governance", "workflow", "quality"]),
            points: 30
        },
        {
            type: "mcq",
            question: (competency) => `Which decision best shows executive maturity when handling ${competency} in a ${role} context?`,
            options: () => [
                "Use data, risk, and business impact to choose a direction",
                "Choose the loudest opinion",
                "Postpone until someone else decides",
                "Keep the issue hidden"
            ],
            correctAnswer: 0,
            points: 20
        },
        {
            type: "text",
            question: (competency) => `Explain how you would set operating discipline around ${competency} so that ${focus} remains stable at scale.`,
            keywords: (competency) => buildKeywords(competency, [focus, "operating discipline", "cadence", "owner", "measurement", "quality", "scale"]),
            points: 25
        },
        {
            type: "scenario",
            question: (competency) => `A cross-functional program depends on ${competency}. What escalation path and governance model would you design as a ${role}?`,
            keywords: (competency) => buildKeywords(competency, [focus, "escalation", "governance", "dependency", "decision making", "stakeholder", "control"]),
            points: 30
        },
        {
            type: "text",
            question: (competency) => `What long-term improvements would you make to ${competency} so the ${role} function can keep improving ${focus} year after year?`,
            keywords: (competency) => buildKeywords(competency, [focus, "long-term", "improvement", "process", "capability", "metrics", "strategy"]),
            points: 25
        }
    ];

    competencies.forEach((competency) => {
        easyQuestionPatterns.forEach((pattern) => {
            easy.push({
                type: pattern.type,
                question: pattern.question(competency),
                options: pattern.options ? pattern.options(competency) : undefined,
                correctAnswer: pattern.correctAnswer,
                keywords: pattern.keywords ? pattern.keywords(competency) : undefined,
                points: pattern.points
            });
        });

        mediumQuestionPatterns.forEach((pattern) => {
            medium.push({
                type: pattern.type,
                question: pattern.question(competency),
                options: pattern.options ? pattern.options(competency) : undefined,
                correctAnswer: pattern.correctAnswer,
                keywords: pattern.keywords ? pattern.keywords(competency) : undefined,
                points: pattern.points
            });
        });

        hardQuestionPatterns.forEach((pattern) => {
            hard.push({
                type: pattern.type,
                question: pattern.question(competency),
                options: pattern.options ? pattern.options(competency) : undefined,
                correctAnswer: pattern.correctAnswer,
                keywords: pattern.keywords ? pattern.keywords(competency) : undefined,
                points: pattern.points
            });
        });
    });

    return { easy, medium, hard };
}

const corporateRoleProfiles = {
    "Business Analyst": {
        focus: "business clarity",
        competencies: ["requirement analysis", "stakeholder management", "process mapping", "gap analysis", "documentation"]
    },
    "Product Manager": {
        focus: "product outcome",
        competencies: ["product strategy", "roadmap planning", "prioritization", "customer discovery", "go-to-market"]
    },
    "HR Executive": {
        focus: "people operations",
        competencies: ["talent acquisition", "employee engagement", "policy compliance", "performance management", "conflict resolution"]
    },
    "Marketing Executive": {
        focus: "campaign impact",
        competencies: ["campaign strategy", "brand positioning", "market research", "lead generation", "performance analytics"]
    },
    "Sales Executive": {
        focus: "revenue growth",
        competencies: ["pipeline management", "negotiation", "customer relationship", "forecasting", "closing strategy"]
    },
    "Accounts/Finance Executive": {
        focus: "financial accuracy",
        competencies: ["financial reporting", "budgeting", "cost control", "compliance", "cash flow management"]
    },
    "Customer Support Executive": {
        focus: "customer satisfaction",
        competencies: ["ticket resolution", "service quality", "customer communication", "escalation handling", "knowledge management"]
    },
    "Operations Executive": {
        focus: "operational efficiency",
        competencies: ["process optimization", "resource planning", "service delivery", "vendor coordination", "SLA management"]
    },
    "QA Engineer": {
        focus: "release quality",
        competencies: ["test strategy", "defect management", "automation", "regression testing", "quality metrics"]
    },
    "IT Executive": {
        focus: "system reliability",
        competencies: ["it support", "system administration", "incident response", "asset management", "security compliance"]
    },
    "UI/UX Designer": {
        focus: "user experience",
        competencies: ["user research", "wireframing", "interaction design", "usability testing", "design systems"]
    }
};

Object.entries(corporateRoleProfiles).forEach(([role, profile]) => {
    if (!questionBank[role]) {
        questionBank[role] = buildCorporateRoleQuestions(role, profile);
    }
});

// Function to get questions for a specific role and difficulty  
// Now supports returning exactly the requested count by using all available questions
function getQuestions(role, difficulty, count = 10) {
    console.log(`Generating questions for ${role} - ${difficulty} - Count: ${count}`);
    
    if (!questionBank[role]) {
        console.error(`Role "${role}"not found in question bank`);
        return [];
    }
    
    if (!questionBank[role][difficulty]) {
        console.error(`Difficulty "${difficulty}"not found for role "${role}"`);
        return [];
    }
    
    const questions = questionBank[role][difficulty];

    if (!Array.isArray(questions) || questions.length === 0) {
        console.error(`No questions available for ${role} - ${difficulty}`);
        return [];
    }

    const selected = [];
    while (selected.length < count) {
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        for (const question of shuffled) {
            selected.push(question);
            if (selected.length >= count) break;
        }
    }

    console.log(`Generated ${selected.length} questions out of ${questions.length} available`);
    return selected;
}

// Function to evaluate an answer
function evaluateAnswer(question, userAnswer) {
    if (question.type === 'mcq') {
        const isCorrect = parseInt(userAnswer) === question.correctAnswer;
        return {
            correct: isCorrect,
            score: isCorrect ? question.points : 0,
            maxScore: question.points,
            feedback: isCorrect ? 'Correct!' : `Incorrect. The correct answer is: ${question.options[question.correctAnswer]}`
        };
    } else {
        // For text and scenario questions, check for keywords
        if (!userAnswer || userAnswer.trim().length < 20) {
            return {
                correct: false,
                score: 0,
                maxScore: question.points,
                feedback: 'Answer is too short. Please provide a more detailed response.'
            };
        }
        
        const answerLower = userAnswer.toLowerCase();
        let keywordMatches = 0;
        const matchedKeywords = [];
        
        question.keywords.forEach(keyword => {
            if (answerLower.includes(keyword.toLowerCase())) {
                keywordMatches++;
                matchedKeywords.push(keyword);
            }
        });
        
        const matchPercentage = (keywordMatches / question.keywords.length) * 100;
        const score = Math.round((matchPercentage / 100) * question.points);
        
        let feedback = '';
        if (matchPercentage >= 70) {
            feedback = 'Excellent answer! You covered most key concepts.';
        } else if (matchPercentage >= 50) {
            feedback = 'Good attempt! Consider including: ' + question.keywords.filter(k => !matchedKeywords.includes(k)).slice(0, 3).join(', ');
        } else {
            feedback = 'Your answer needs improvement. Key concepts to include: ' + question.keywords.slice(0, 5).join(', ');
        }
        
        return {
            correct: matchPercentage >= 50,
            score: score,
            maxScore: question.points,
            feedback: feedback,
            matchPercentage: Math.round(matchPercentage)
        };
    }
}

