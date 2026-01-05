const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env');

console.log('Checking .env file at:', envPath);

if (!fs.existsSync(envPath)) {
    console.error('ERROR: .env file NOT FOUND at ' + envPath);
    process.exit(1);
}

try {
    const content = fs.readFileSync(envPath, 'utf8');
    console.log('File content length:', content.length);

    const lines = content.split('\n');
    let spaceIdFound = false;
    let tokenFound = false;

    lines.forEach((line, index) => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) return;

        if (trimmed.startsWith('CONTENTFUL_SPACE_ID=')) {
            spaceIdFound = true;
            console.log(`Line ${index + 1}: Found CONTENTFUL_SPACE_ID`);
            const value = trimmed.split('=')[1];
            console.log(`   Value is present: ${!!value && value.length > 0}`);
        }

        if (trimmed.startsWith('CONTENTFUL_ACCESS_TOKEN=')) {
            tokenFound = true;
            console.log(`Line ${index + 1}: Found CONTENTFUL_ACCESS_TOKEN`);
            const value = trimmed.split('=')[1];
            console.log(`   Value is present: ${!!value && value.length > 0}`);
        }
    });

    if (spaceIdFound && tokenFound) {
        console.log('SUCCESS: Both keys found in .env file.');
        console.log('If Next.js is not seeing them, try renaming .env to .env.local');
    } else {
        console.error('FAILURE: Missing one or more keys.');
        if (!spaceIdFound) console.error(' - CONTENTFUL_SPACE_ID is missing');
        if (!tokenFound) console.error(' - CONTENTFUL_ACCESS_TOKEN is missing');
    }

} catch (err) {
    console.error('Error reading file:', err);
}
