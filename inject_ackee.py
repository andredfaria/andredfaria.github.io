import os
import re

script_tag = '<script async src="https://eficienciia-ackee.jqd7au.easypanel.host/tracker.js" data-ackee-server="https://eficienciia-ackee.jqd7au.easypanel.host" data-ackee-domain-id="5159bd3f-d4f5-4880-a73e-7cde1c5d99cc"></script>'

def add_script_to_file(file_path):
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # Avoid duplicate injection
    if 'eficienciia-ackee.jqd7au.easypanel.host/tracker.js' in content:
        print(f"Skipping {file_path}: Script already present.")
        return False

    # Try to find </head>
    if '</head>' in content:
        new_content = content.replace('</head>', f'  {script_tag}\n</head>')
    elif '</HEAD>' in content:
        new_content = content.replace('</HEAD>', f'  {script_tag}\n</HEAD>')
    else:
        # Fallback: if no </head>, try to find <body> and insert before it
        if '<body' in content.lower():
            new_content = re.sub(r'(<body)', f'{script_tag}\n\\1', content, flags=re.IGNORECASE)
        else:
            # Last resort: append to end
            print(f"Warning: No </head> or <body> found in {file_path}. Appending to end.")
            new_content = content + f'\n{script_tag}'

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Modified {file_path}")
    return True

def main():
    root_dir = '.'
    count = 0
    for root, dirs, files in os.walk(root_dir):
        # Skip hidden directories like .git
        if '/.' in root or '\\.' in root:
            continue
            
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                if add_script_to_file(file_path):
                    count += 1
    print(f"Finished. Modified {count} files.")

if __name__ == "__main__":
    main()
