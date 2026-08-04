import os
import re

script_tag = '''<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xx5e13zrcw");
</script>'''

def add_script_to_file(file_path):
    with open(file_path, 'rb') as f:
        raw = f.read()

    content = raw.decode('utf-8', errors='ignore')

    # Avoid duplicate injection
    if 'clarity.ms/tag/' in content:
        print(f"Skipping {file_path}: Script already present.")
        return False

    # Preserve original line-ending style
    newline = '\r\n' if '\r\n' in content else '\n'
    tag = script_tag.replace('\n', newline) if newline != '\n' else script_tag

    # Try to find </head>
    if '</head>' in content:
        new_content = content.replace('</head>', f'  {tag}{newline}</head>')
    elif '</HEAD>' in content:
        new_content = content.replace('</HEAD>', f'  {tag}{newline}</HEAD>')
    else:
        # Fallback: if no </head>, try to find <body> and insert before it
        if '<body' in content.lower():
            new_content = re.sub(r'(<body)', f'{tag}{newline}\\1', content, flags=re.IGNORECASE)
        else:
            # Last resort: append to end
            print(f"Warning: No </head> or <body> found in {file_path}. Appending to end.")
            new_content = content + f'{newline}{tag}'

    with open(file_path, 'wb') as f:
        f.write(new_content.encode('utf-8'))
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
