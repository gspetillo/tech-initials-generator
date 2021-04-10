const vue = new Vue({
    el: '#app',
    data: {
        text: '',
        final: 'Your Result Here',
        words: {
            a: ["as a", "Artificial", "Analysis", "Assurance", "Ads", "Acess", "Amazon", "Adapter", "App", "Application", "Algorthym", "Adobe", "ASCII", "Array", "Admin", "Agile", "Architeture", "Angular", "Assembly", "Assembler", "Agreement", "Address", "Anonymous", "Applet", "Arduino", "Area", "Authentication", "Assistant", "Advanced", "Attachment", "Asset", "Assets"],
            b: ["Backend", "Browser", "Bug", "Broadcast", "Bus", "Big Data", "Blockchain", "Bootstrap", "Bitcoin", "Breakpoint", "Backbone", "Bandwidth", "Business", "Binary", "Binding", "Bit", "Byte", "Bluetooth", "Boolean", "Buffer", "Button", "Bottom"],
            c: ["Cluster", "Cookie", "Card", "Compress", "Common", "Cursor", "Case", "Computer", "Chatbot", "Client", "Content", "Chat", "Connection", "Connector", "Character", "Class", "Code", "Command", "Compilator", "Cache", "Callback", "Clean", "Cloud", "Computing", "Container", "Continuous", "Central", "Compact", "Controller", "Captcha", "Cryptography", "Coding", "Continuity", "Cable", "Case", "Center", "Color", "Collector", "Collection", "Configuration", "Cascadian", "Certified", "Certification", "Cognitive"],
            d: ["Data", "Database", "Domain", "Deno", "Desktop", "Docker", "Dart", "Driven", "Design", "Developer", "Development", "Driver", "Distance", "Debugger", "Deep", "Dial", "Digital", "Defragmentation", "Deploy", "DevOps", "Document", "Dependency", "Drive", "Django", "Disk", "Dynamic", "Dialog", "Directory", "Download", "Dots", "Drop", "Device", "Decision", "Decode", "Decoding"],
            e: ["Embed", "Email", "Enterprise", "Export", "Ethernet", "Expert", "Emulator", "Explorer", "Emulation", "Encryption", "Endpoint", "Extension", "Emoji", "Exception", "Error", "Expression", "Experience", "Enviroment", "Expression", "Engine", "Extensible", "Elastic", "Extended"],
            f: ["for", "Frontend", "Field", "Fallback", "Function", "Feedback", "File", "Framework", "Fiber", "Flutter", "Function", "Flow", "Functional", "Factor", "Filter", "Finger", "Firewall", "Flash", "Folder", "Frame", "Freeware", "Form", "Formatter", "Format", "Font", "Feed", "Fidelity"],
            g: ["Google", "Go", "Git", "Github", "Gulp", "Graphic", "Grid", "Garbage", "Get", "Gif", "Global", "Growth", "Groper", "Gateway"],
            h: ["Hardware", "Hyper", "Hard", "Harder", "Host", "Hosting", "Hub"],
            i: ["Information", "Intelligence", "Interface", "Iterator", "Integrated", "Internet", "Integration", "Injection", "Identifier", "Infrastructure", "Image", "Interruption", "Instagram"],
            j: ["Java", "Javascript", "Joint", "Jira"],
            k: ["Kotlin", "Key", "Keyword", "Kubernetes", "Kafka", "Kit", "Knowledge", "Kernel", "Kerning"],
            l: ["Library", "Language", "Locator", "Linux", "Learning", "Laser", "Link", "Logoin", "List", "Linked", "Link", "Like", "Local", "Large"],
            m: ["Model", "Markup", "Microsoft", "Machine", "Master", "Management", "Markdown", "Microservice", "Migration", "Memory", "Matrix", "Map", "Metropolitan", "Media", "Mail", "Main", "Maintenance", "Multimedia", "Multitask", "Multithread", "Manager", "Multi", "Multiple", "Monitor", "Monitoring", "Module"],
            n: ["Node", "Net", "Network", "Name", "Notation", "Node.js", "NoSQL", "Notation", "Notepad", "News", "Newsletter"],
            o: ["of", "over", "Online", "Offline", "Open", "OpenSource", "Object", "Object-Oriented", "Operator", "Optimization", "Optical", "Organization", "OpenType", "Office", "Only"],
            p: ["Program", "Protocol", "Plain", "Procedure", "Package", "Python", "Preprocessor", "Processor", "Processing", "Packet", "Programming", "Power", "Pipeline", "Progressive", "Page", "Pack", "Plan", "Preditive", "Provider", "Pixel", "Post", "Print", "Printer", "Printer", "Point", "Pointer", "Platform", "Port", "Personal", "Password", "Parallel", "Portable", "Peer-to-Peer", "Perl", "Privacy", "Private", "Phone", "Phishing", "Plugin", "Plug", "Player", "PostScript", "Proxy", "Public", "Pull", "Push", "Pair"],
            q: ["Queue", "Query", "Quality", "Qubit"],
            r: ["Resource", "Relay", "React", "Remote", "Runtime", "Raster", "Rasterization", "Rust", "Reactive", "Recursive", "Redux", "Refactoring", "Regular", "Representational", "Review", "Read", "Request", "Reader", "Random", "Range", "Raspberry", "Reboot", "Remake", "Requirements", "Recall", "Register", "Record", "Router", "Reality"],
            s: ["System", "Software", "Script", "Security", "Server", "Sound", "Scale", "Scaling", "Shutdown", "Source", "Services", "Service", "Subsystem", "Scrum", "Server-side", "Syntax", "Structure", "Stack", "State", "Search", "Settings", "Serverless", "Site", "Systems", "Squad", "Solid", "Swift", "Spam", "Sensitive", "Share", "Sharing", "Serial", "Smart", "Smartphone", "Smartwatch", "Safe", "Storage", "Satellite", "Screen", "Scroll", "Scroller", "Scrolling", "Secure", "Section", "Self", "Signature", "Single", "Spam", "Set", "Stream", "Streaming", "Spyware", "Subdirectory", "Sorting", "Support", "Super", "Style", "Sheet", "Stylesheet", "Solution", "Skill", "Score", "Semantic"],
            t: ["Technology", "Text", "Team", "Transaction", "Tool", "Token", "Thinking", "Transfer", "Turing", "Transferece", "Trade", "Test", "Tensorflow", "Thread", "Typing", "Thread", "Typescript", "Transport", "Transformation", "Things", "Translation", "Translator", "Transmission", "Transmissor", "Table", "Telnet", "Terminal", "Tag", "Toolkit", "Tools", "Trojan", "TrueType", "Twitter", "Two-factor"],
            u: ["Unicode", "Universal", "User", "Unit", "Universally", "Unique", "Update", "Upload", "Username", "Utillity"],
            v: ["Version", "Vue.js", "View", "Variable", "Visual", "Virus", "Video", "Virtual", "Virtualization", "Vision", "Verification", "Verifier", "Validation", "Validator", "Vector", "Vectorizer", "Voice"],
            w: ["Web", "Wireless", "Window", "Windows", "Warehouse", "Word", "Wordpress", "Wide", "Worldwide", "Website", "Webservices", "Webview", "Widget", "Wizard", "Workflow", "Workstation", "World", "Worm"],
            x: ["Xamarin", "eXperience"],
            y: ["Yaml", "Youtube"],
            z: ["ZIP", "Zoom", "Zappier"],
        },
    },
    methods: {
        initials() {
            this.final = ""
            const lower = this.text.toLowerCase()
            for (l of lower) {
                if (l == " ") continue;
                this.final += this.words[l][Math.floor(Math.random() * this.words[l].length)] + " "
            }
        },
        removeText() {
            this.text = ""
            this.final = "Your Result Here"
        },
    }
})