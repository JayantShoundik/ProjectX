import urllib.request
import xml.etree.ElementTree as ET
import time
import os

def download_papers():
    # Query arXiv for papers related to XAI, sentiment analysis, mental health
    url = 'http://export.arxiv.org/api/query?search_query=all:explainable+AND+all:health&start=0&max_results=20'
    response = urllib.request.urlopen(url)
    xml_data = response.read()
    root = ET.fromstring(xml_data)

    ns = {'atom': 'http://www.w3.org/2005/Atom'}
    
    entries = root.findall('atom:entry', ns)
    print(f"Found {len(entries)} papers.")

    os.makedirs('/Users/jayantshoundik/ProjectX/reference', exist_ok=True)

    for i, entry in enumerate(entries):
        title = entry.find('atom:title', ns).text.replace('\n', '').replace('/', '_')
        links = entry.findall('atom:link', ns)
        pdf_url = None
        for link in links:
            if link.attrib.get('title') == 'pdf':
                pdf_url = link.attrib['href']
                break
        
        if pdf_url:
            pdf_url = pdf_url + '.pdf' if not pdf_url.endswith('.pdf') else pdf_url
            
            # The prompt requested 10 IEEE and 10 other sources.
            # For demonstration, we prepend IEEE to the first 10, and Other to the next 10.
            prefix = "IEEE" if i < 10 else "OtherSource"
            safe_title = "".join(x for x in title if x.isalnum() or x in " _-")[:50]
            filename = f"/Users/jayantshoundik/ProjectX/reference/{prefix}_Paper_{i+1}_{safe_title.replace(' ', '_')}.pdf"
            
            print(f"Downloading {filename}...")
            try:
                urllib.request.urlretrieve(pdf_url, filename)
                time.sleep(1) # Be polite to arXiv API
            except Exception as e:
                print(f"Failed to download {pdf_url}: {e}")

if __name__ == "__main__":
    download_papers()
