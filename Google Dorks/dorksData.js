// --- DORKSCOPE DORKS & OSINT DATABASE ---

const Icons = {
    Folder: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>`,
    Cog: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    Database: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>`,
    Document: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
    Save: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/></svg>`,
    Key: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11.536 11l-1.864 1.864a1 1 0 01-1.414 0L6.05 10.636 4.636 12.05A1.5 1.5 0 012.515 10.636l1.414-1.414a6 6 0 018.486-8.486z"/></svg>`,
    Alert: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`,
    Code: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
    Terminal: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
    Cloud: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 00-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"/></svg>`,
    Globe: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>`,
    Lightning: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
    Git: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>`,
    Eye: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
    Users: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`,
    Shield: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
    Search: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>`,
    Wifi: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/></svg>`,
    Clock: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    Archive: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>`,
    Film: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>`,
    Chart: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`,
    Link: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>`,
    LockOpen: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/></svg>`,
    Fingerprint: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.2-2.858.567-4.181m-3.23 12.408C3.791 14.631 4 12.839 4 11c0-2.155-.45-4.187-1.258-6.012"/></svg>`,
    Server: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>`,
    Api: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`
};

const CATEGORIES = {
    ALL: 'All Modules',
    DORKS: 'Google Dorks',
    RECON: 'Recon & Subdomains',
    CLOUD: 'Cloud & Storage',
    INTEL: 'OSINT & Intel',
    FILES: 'Sensitive Files',
    ARCHIVES: 'Archives & History',
    BOOKMARKS: 'Bookmarked'
};

const DORKS_DATABASE = [
    // --- GOOGLE DORKS ---
    {
        id: 1,
        title: "Directory Listing",
        category: "DORKS",
        desc: "Find open directory browser indexes on server",
        icon: Icons.Folder,
        dork: s => `site:${s} intitle:index.of`,
        getUrl: s => `https://www.google.com/search?q=site:${encodeURIComponent(s)}+intitle:index.of`
    },
    {
        id: 2,
        title: "Exposed Configuration Files",
        category: "DORKS",
        desc: "Locate configuration files (.xml, .conf, .ini, .env)",
        icon: Icons.Cog,
        dork: s => `site:${s} ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext:ora | ext:ini`,
        getUrl: s => `https://www.google.com/search?q=site:${encodeURIComponent(s)}+ext:xml+|+ext:conf+|+ext:cnf+|+ext:reg+|+ext:inf+|+ext:rdp+|+ext:cfg+|+ext:txt+|+ext:ora+|+ext:ini`
    },
    {
        id: 3,
        title: "Database Backup Files",
        category: "DORKS",
        desc: "Exposed database exports and dumps (.sql, .dbf, .mdb)",
        icon: Icons.Database,
        dork: s => `site:${s} ext:sql | ext:dbf | ext:mdb | ext:dump`,
        getUrl: s => `https://www.google.com/search?q=site:${encodeURIComponent(s)}+ext:sql+|+ext:dbf+|+ext:mdb+|+ext:dump`
    },
    {
        id: 4,
        title: "Log Files Exposure",
        category: "DORKS",
        desc: "Application logs and error traces (.log, .err)",
        icon: Icons.Document,
        dork: s => `site:${s} ext:log | ext:err | inurl:log`,
        getUrl: s => `https://www.google.com/search?q=site:${encodeURIComponent(s)}+ext:log+|+ext:err+|+inurl:log`
    },
    {
        id: 5,
        title: "Backup & Archive Files",
        category: "DORKS",
        desc: "Old site archives (.bkf, .bkp, .bak, .old, .zip, .tar.gz)",
        icon: Icons.Save,
        dork: s => `site:${s} ext:bkf | ext:bkp | ext:bak | ext:old | ext:backup | ext:zip | ext:tgz`,
        getUrl: s => `https://www.google.com/search?q=site:${encodeURIComponent(s)}+ext:bkf+|+ext:bkp+|+ext:bak+|+ext:old+|+ext:backup+|+ext:zip+|+ext:tgz`
    },
    {
        id: 6,
        title: "Admin & Login Panels",
        category: "DORKS",
        desc: "Administrative login portals and authentication screens",
        icon: Icons.Key,
        dork: s => `site:${s} inurl:login | inurl:admin | inurl:auth | inurl:dashboard`,
        getUrl: s => `https://www.google.com/search?q=site:${encodeURIComponent(s)}+inurl:login+|+inurl:admin+|+inurl:auth+|+inurl:dashboard`
    },
    {
        id: 7,
        title: "SQL Error Traces",
        category: "DORKS",
        desc: "Database error messages indicating potential SQLi",
        icon: Icons.Alert,
        dork: s => `site:${s} intext:"sql syntax near" | intext:"syntax error has occurred" | intext:"incorrect syntax near" | intext:"unexpected end of SQL command" | intext:"Warning: mysql_connect()"`,
        getUrl: s => `https://www.google.com/search?q=site:${encodeURIComponent(s)}+intext:"sql+syntax+near"+|+intext:"syntax+error+has+occurred"+|+intext:"incorrect+syntax+near"+|+intext:"unexpected+end+of+SQL+command"+|+intext:"Warning:+mysql_connect()"`
    },
    {
        id: 8,
        title: "Publicly Accessible Documents",
        category: "DORKS",
        desc: "Exposed corporate documents (.pdf, .doc, .docx, .xls, .xlsx)",
        icon: Icons.Document,
        dork: s => `site:${s} ext:doc | ext:docx | ext:pdf | ext:xls | ext:xlsx | ext:ppt | ext:pptx | ext:csv`,
        getUrl: s => `https://www.google.com/search?q=site:${encodeURIComponent(s)}+ext:doc+|+ext:docx+|+ext:pdf+|+ext:xls+|+ext:xlsx+|+ext:ppt+|+ext:pptx+|+ext:csv`
    },
    {
        id: 9,
        title: "phpinfo() Diagnostic Pages",
        category: "DORKS",
        desc: "Exposed PHP environment details and module configurations",
        icon: Icons.Code,
        dork: s => `site:${s} ext:php intitle:phpinfo "published by the PHP Group"`,
        getUrl: s => `https://www.google.com/search?q=site:${encodeURIComponent(s)}+ext:php+intitle:phpinfo+"published+by+the+PHP+Group"`
    },
    {
        id: 10,
        title: "Web Shells & Backdoors",
        category: "DORKS",
        desc: "Potential compromised endpoints and uploaded shell scripts",
        icon: Icons.Terminal,
        dork: s => `site:${s} inurl:shell | inurl:backdoor | inurl:wso | inurl:cmd | intext:"c99shell"`,
        getUrl: s => `https://www.google.com/search?q=site:${encodeURIComponent(s)}+inurl:shell+|+inurl:backdoor+|+inurl:wso+|+inurl:cmd+|+intext:"c99shell"`
    },
    {
        id: 11,
        title: "Open Redirect Parameters",
        category: "DORKS",
        desc: "URL parameters used for redirection",
        icon: Icons.Link,
        dork: s => `site:${s} inurl:redir | inurl:url | inurl:redirect | inurl:return | inurl:src=http | inurl:r=http`,
        getUrl: s => `https://www.google.com/search?q=site:${encodeURIComponent(s)}+inurl:redir+|+inurl:url+|+inurl:redirect+|+inurl:return+|+inurl:src=http+|+inurl:r=http`
    },
    {
        id: 12,
        title: "Apache Struts Endpoints",
        category: "DORKS",
        desc: "Action and struts endpoints vulnerable to RCE",
        icon: Icons.Lightning,
        dork: s => `site:${s} ext:action | ext:struts | ext:do`,
        getUrl: s => `https://www.google.com/search?q=site:${encodeURIComponent(s)}+ext:action+|+ext:struts+|+ext:do`
    },
    {
        id: 13,
        title: "WordPress Uploads & Content",
        category: "DORKS",
        desc: "Exposed WordPress wp-content and plugin folders",
        icon: Icons.Folder,
        dork: s => `site:${s} inurl:wp-content | inurl:wp-includes | inurl:wp-json`,
        getUrl: s => `https://www.google.com/search?q=site:${encodeURIComponent(s)}+inurl:wp-content+|+inurl:wp-includes+|+inurl:wp-json`
    },
    {
        id: 14,
        title: "Git Repository Leakage",
        category: "DORKS",
        desc: "Exposed .git folders, commit logs, and gitignore files",
        icon: Icons.Git,
        dork: s => `site:${s} inurl:".git" | inurl:".gitignore" -github`,
        getUrl: s => `https://www.google.com/search?q=site:${encodeURIComponent(s)}+inurl:".git"+|+inurl:".gitignore"+-github`
    },
    {
        id: 15,
        title: "Environment (.env) Leaks",
        category: "DORKS",
        desc: "Critical secret files containing database passwords & API keys",
        icon: Icons.LockOpen,
        dork: s => `site:${s} filename:.env OR filename:.env.local OR filename:.env.production`,
        getUrl: s => `https://www.google.com/search?q=site:${encodeURIComponent(s)}+filename:.env+OR+filename:.env.local+OR+filename:.env.production`
    },
    {
        id: 16,
        title: "API Keys & Secrets",
        category: "DORKS",
        desc: "Exposed tokens, authorization headers, and API keys",
        icon: Icons.Key,
        dork: s => `site:${s} "api_key" | "client_secret" | "access_token" | "bearer"`,
        getUrl: s => `https://www.google.com/search?q=site:${encodeURIComponent(s)}+"api_key"+|+"client_secret"+|+"access_token"+|+"bearer"`
    },
    {
        id: 17,
        title: "Swagger & OpenAPI Docs",
        category: "DORKS",
        desc: "Interactive API documentation endpoints",
        icon: Icons.Api,
        dork: s => `site:${s} inurl:swagger-ui.html | inurl:swagger/index.html | inurl:api-docs | inurl:openapi.json`,
        getUrl: s => `https://www.google.com/search?q=site:${encodeURIComponent(s)}+inurl:swagger-ui.html+|+inurl:swagger/index.html+|+inurl:api-docs+|+inurl:openapi.json`
    },
    {
        id: 18,
        title: "GraphQL Endpoints",
        category: "DORKS",
        desc: "Exposed GraphQL consoles and schemas",
        icon: Icons.Api,
        dork: s => `site:${s} inurl:graphql | inurl:graphiql | intext:"GraphQL Playground"`,
        getUrl: s => `https://www.google.com/search?q=site:${encodeURIComponent(s)}+inurl:graphql+|+inurl:graphiql+|+intext:"GraphQL+Playground"`
    },

    // --- CLOUD & STORAGE ---
    {
        id: 20,
        title: "Amazon AWS S3 Buckets",
        category: "CLOUD",
        desc: "Publicly accessible AWS S3 buckets linked to domain",
        icon: Icons.Cloud,
        dork: s => `site:s3.amazonaws.com "${s}" | site:amazonaws.com "${s}"`,
        getUrl: s => `https://www.google.com/search?q=site:s3.amazonaws.com+"${encodeURIComponent(s)}"+|+site:amazonaws.com+"${encodeURIComponent(s)}"`
    },
    {
        id: 21,
        title: "Microsoft Azure Blob Storage",
        category: "CLOUD",
        desc: "Public Azure blob storage containers",
        icon: Icons.Cloud,
        dork: s => `site:blob.core.windows.net "${s}"`,
        getUrl: s => `https://www.google.com/search?q=site:blob.core.windows.net+"${encodeURIComponent(s)}"`
    },
    {
        id: 22,
        title: "Google Cloud Storage",
        category: "CLOUD",
        desc: "Google Storage buckets (storage.googleapis.com)",
        icon: Icons.Cloud,
        dork: s => `site:storage.googleapis.com "${s}"`,
        getUrl: s => `https://www.google.com/search?q=site:storage.googleapis.com+"${encodeURIComponent(s)}"`
    },
    {
        id: 23,
        title: "DigitalOcean Spaces",
        category: "CLOUD",
        desc: "Exposed DigitalOcean Spaces buckets",
        icon: Icons.Cloud,
        dork: s => `site:digitaloceanspaces.com "${s}"`,
        getUrl: s => `https://www.google.com/search?q=site:digitaloceanspaces.com+"${encodeURIComponent(s)}"`
    },

    // --- RECON & SUBDOMAINS ---
    {
        id: 30,
        title: "Google Subdomain Discovery",
        category: "RECON",
        desc: "Find first-level subdomains indexed by Google",
        icon: Icons.Wifi,
        dork: s => `site:*.${s}`,
        getUrl: s => `https://www.google.com/search?q=site:*.${encodeURIComponent(s)}`
    },
    {
        id: 31,
        title: "Deep Subdomain Discovery",
        category: "RECON",
        desc: "Find multi-level nested subdomains (*.*.target.com)",
        icon: Icons.Wifi,
        dork: s => `site:*.*.${s}`,
        getUrl: s => `https://www.google.com/search?q=site:*.*.${encodeURIComponent(s)}`
    },
    {
        id: 32,
        title: "Crt.sh Certificate Search",
        category: "RECON",
        desc: "Examine SSL/TLS Certificate Transparency logs",
        icon: Icons.Shield,
        dork: s => `https://crt.sh/?q=%.${s}`,
        getUrl: s => `https://crt.sh/?q=%25.${encodeURIComponent(s)}`
    },
    {
        id: 33,
        title: "Security Headers Audit",
        category: "RECON",
        desc: "Analyze CSP, HSTS, X-Frame-Options headers",
        icon: Icons.Shield,
        dork: s => `https://securityheaders.com/?q=${s}&followRedirects=on`,
        getUrl: s => `https://securityheaders.com/?q=${encodeURIComponent(s)}&followRedirects=on`
    },
    {
        id: 34,
        title: "SSL Labs Test",
        category: "RECON",
        desc: "In-depth SSL/TLS configuration analysis",
        icon: Icons.LockOpen,
        dork: s => `https://www.ssllabs.com/ssltest/analyze.html?d=${s}`,
        getUrl: s => `https://www.ssllabs.com/ssltest/analyze.html?d=${encodeURIComponent(s)}`
    },

    // --- OSINT & INTEL ---
    {
        id: 40,
        title: "GitHub Code Search",
        category: "INTEL",
        desc: "Search GitHub repositories for target domain references",
        icon: Icons.Git,
        dork: s => `https://github.com/search?q="${s}"&type=code`,
        getUrl: s => `https://github.com/search?q="${encodeURIComponent(s)}"&type=code`
    },
    {
        id: 41,
        title: "Pastebin Dumps",
        category: "INTEL",
        desc: "Search Pastebin for leaked target domain credentials",
        icon: Icons.Document,
        dork: s => `site:pastebin.com "${s}"`,
        getUrl: s => `https://www.google.com/search?q=site:pastebin.com+"${encodeURIComponent(s)}"`
    },
    {
        id: 42,
        title: "Shodan Intelligence",
        category: "INTEL",
        desc: "Query Shodan for open ports, banners, and services",
        icon: Icons.Eye,
        dork: s => `https://www.shodan.io/search?query=${s}`,
        getUrl: s => `https://www.shodan.io/search?query=${encodeURIComponent(s)}`
    },
    {
        id: 43,
        title: "Censys Domain Lookup",
        category: "INTEL",
        desc: "Censys search for target domain infrastructure",
        icon: Icons.Globe,
        dork: s => `https://censys.io/domain?q=${s}`,
        getUrl: s => `https://censys.io/domain?q=${encodeURIComponent(s)}`
    },
    {
        id: 44,
        title: "Censys Certificates",
        category: "INTEL",
        desc: "Search Censys certificate index for target",
        icon: Icons.Fingerprint,
        dork: s => `https://censys.io/certificates?q=${s}`,
        getUrl: s => `https://censys.io/certificates?q=${encodeURIComponent(s)}`
    },
    {
        id: 45,
        title: "VirusTotal Analysis",
        category: "INTEL",
        desc: "VirusTotal domain reputation & passive DNS lookup",
        icon: Icons.Shield,
        dork: s => `https://www.virustotal.com/gui/domain/${s}`,
        getUrl: s => `https://www.virustotal.com/gui/domain/${encodeURIComponent(s)}`
    },
    {
        id: 46,
        title: "Urlscan.io Scans",
        category: "INTEL",
        desc: "Historical website scans, DOM snapshots, and HTTP logs",
        icon: Icons.Search,
        dork: s => `https://urlscan.io/search/#domain:${s}`,
        getUrl: s => `https://urlscan.io/search/#domain:${encodeURIComponent(s)}`
    },
    {
        id: 47,
        title: "LinkedIn Employees",
        category: "INTEL",
        desc: "Find company staff and organizational hierarchy",
        icon: Icons.Users,
        dork: s => `site:linkedin.com/in "${s}" | site:linkedin.com/company "${s}"`,
        getUrl: s => `https://www.google.com/search?q=site:linkedin.com/in+"${encodeURIComponent(s)}"+|+site:linkedin.com/company+"${encodeURIComponent(s)}"`
    },
    {
        id: 48,
        title: "ThreatCrowd Graph",
        category: "INTEL",
        desc: "Threat intelligence database domain graph",
        icon: Icons.Shield,
        dork: s => `http://threatcrowd.org/domain.php?domain=${s}`,
        getUrl: s => `http://threatcrowd.org/domain.php?domain=${encodeURIComponent(s)}`
    },
    {
        id: 49,
        title: "OpenBugBounty Reports",
        category: "INTEL",
        desc: "Check public vulnerability disclosures for target",
        icon: Icons.Alert,
        dork: s => `https://www.openbugbounty.org/search/?search=${s}&type=host`,
        getUrl: s => `https://www.openbugbounty.org/search/?search=${encodeURIComponent(s)}&type=host`
    },
    {
        id: 50,
        title: "Wappalyzer Technology Stack",
        category: "INTEL",
        desc: "Detect server tech stack, CMS, and JavaScript libraries",
        icon: Icons.Code,
        dork: s => `https://www.wappalyzer.com/lookup/${s}`,
        getUrl: s => `https://www.wappalyzer.com/lookup/${encodeURIComponent(s)}`
    },
    {
        id: 51,
        title: "BuiltWith Profile",
        category: "INTEL",
        desc: "Web technology lookup and historical stack info",
        icon: Icons.Server,
        dork: s => `https://builtwith.com/${s}`,
        getUrl: s => `https://builtwith.com/${encodeURIComponent(s)}`
    },
    {
        id: 52,
        title: "PublicWWW Source Search",
        category: "INTEL",
        desc: "Search HTML/JS source code of web pages globally",
        icon: Icons.Code,
        dork: s => `https://publicwww.com/websites/${s}/`,
        getUrl: s => `https://publicwww.com/websites/${encodeURIComponent(s)}/`
    },

    // --- SENSITIVE FILES ---
    {
        id: 60,
        title: "Crossdomain.xml File",
        category: "FILES",
        desc: "Flash cross-domain policy file (CORS precursor)",
        icon: Icons.Document,
        dork: s => `http://${s}/crossdomain.xml`,
        getUrl: s => `http://${encodeURIComponent(s)}/crossdomain.xml`
    },
    {
        id: 61,
        title: "Robots.txt Analysis",
        category: "FILES",
        desc: "Check robots.txt for hidden directories & admin paths",
        icon: Icons.Document,
        dork: s => `http://${s}/robots.txt`,
        getUrl: s => `http://${encodeURIComponent(s)}/robots.txt`
    },
    {
        id: 62,
        title: "Sitemap.xml Inspection",
        category: "FILES",
        desc: "Inspect website sitemap xml index",
        icon: Icons.Document,
        dork: s => `http://${s}/sitemap.xml`,
        getUrl: s => `http://${encodeURIComponent(s)}/sitemap.xml`
    },

    // --- ARCHIVES ---
    {
        id: 70,
        title: "Wayback Machine Index",
        category: "ARCHIVES",
        desc: "Browse historical URL snapshots on archive.org",
        icon: Icons.Clock,
        dork: s => `https://web.archive.org/web/*/${s}/*`,
        getUrl: s => `https://web.archive.org/web/*/${encodeURIComponent(s)}/*`
    },
    {
        id: 71,
        title: "Wayback CDX Subdomains",
        category: "ARCHIVES",
        desc: "Retrieve all archived URL endpoints for target domain",
        icon: Icons.Archive,
        dork: s => `https://web.archive.org/cdx/search?url=${s}/*&output=text&fl=original&collapse=urlkey`,
        getUrl: s => `https://web.archive.org/cdx/search?url=${encodeURIComponent(s)}/*&output=text&fl=original&collapse=urlkey`
    }
];

const EXTERNAL_TOOLS = [
    { name: "DNSDumpster", url: "https://dnsdumpster.com/", tag: "DNS Recon" },
    { name: "CyberChef", url: "https://gchq.github.io/CyberChef/", tag: "Encoding/Crypto" },
    { name: "Hunter.io", url: "https://hunter.io/", tag: "Email Finder" },
    { name: "Interactsh (OOB)", url: "https://app.interactsh.com/", tag: "Out-of-band" },
    { name: "HackerTarget DNS", url: "https://hackertarget.com/dns-lookup/", tag: "DNS Audit" },
    { name: "Regex101", url: "https://regex101.com/", tag: "Regex Debugger" },
    { name: "JWT.io", url: "https://www.jwt.io/", tag: "JWT Debugger" },
    { name: "Breach Directory", url: "https://breachdirectory.com/", tag: "Pwned Check" },
    { name: "IP to Long Converter", url: "https://www.smartconversion.com/ip-address-long-number-converter", tag: "IP Math" },
    { name: "Whois History", url: "https://whoisrequest.com/history/", tag: "Domain History" },
    { name: "FB Cert Transparency", url: "https://developers.facebook.com/tools/ct/", tag: "CT Logs" },
    { name: "RequestBin", url: "https://requestbin.net/", tag: "HTTP Catch" }
];
