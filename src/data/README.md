# Location Data Files

This folder contains JSON files for location-specific pages. Each JSON file represents a different location and will automatically create a route for that location.

## How to Add a New Location

1. **Create a new JSON file** in this folder with the location name (e.g., `madhapur.json`, `gachibowli.json`)
   - Use lowercase letters
   - No spaces (use hyphens if needed)
   - The filename will become the URL path (e.g., `madhapur.json` → `/madhapur`)

2. **Copy the structure from `hitechcity.json`** and modify the content for your new location

3. **That's it!** The route will be automatically created. No need to modify App.js or any other files.

## JSON Structure

Each location JSON file should contain:

```json
{
    "locationName": "Location Name",
    "seoTitle": "SEO Title for the page",
    "seoDescription": "SEO description",
    "canonicalUrl": "https://rehabb.care/locationname",
    "heroTitle": "Main heading",
    "heroSubtitle": "Subtitle",
    "heroDescription": "Description text",
    "servingAreas": ["Area 1", "Area 2", ...],
    "conditions": [
        {
            "title": "Condition Name",
            "description": "Description of the condition"
        }
    ],
    "whyChooseReasons": ["Reason 1", "Reason 2", ...],
    "itProfessionalSection": {
        "title": "Section title",
        "description": "Section description",
        "issues": ["Issue 1", "Issue 2", ...],
        "additionalInfo": "Additional information"
    },
    "howItWorks": [
        {
            "title": "Step title",
            "description": "Step description"
        }
    ],
    "faqs": [
        {
            "question": "Question text",
            "answer": "Answer text"
        }
    ],
    "contactInfo": {
        "website": "www.rehabb.care",
        "phone": "+91 96524 68777",
        "whatsapp": "+91 96524 68777"
    }
}
```

## Example

To add a page for Madhapur:

1. Create `madhapur.json` in this folder
2. Copy content from `hitechcity.json`
3. Update all location-specific text
4. Access the page at `/madhapur`

## Notes

- All JSON files in this folder will automatically create routes
- The URL will match the filename (without .json extension)
- Make sure JSON is valid (use a JSON validator if needed)
- Keep the same structure as `hitechcity.json` for consistency
