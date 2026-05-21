# Location Pages Implementation Guide

## Overview

The location pages system allows you to create dynamic location-specific pages by simply adding JSON files. The system automatically creates routes and renders pages based on the JSON data.

## What Was Implemented

### 1. **LocationPage Component** (`src/locations/LocationPage.js`)
   - Reusable React component that renders location-specific content
   - Takes `locationData` as a prop
   - Includes all sections: Hero, Features, Conditions, IT Professionals, FAQ, CTA, etc.
   - Same exact design as REHABB_PROJ

### 2. **LocationPage Styles** (`src/locations/LocationPage.css`)
   - Complete CSS styling matching REHABB_PROJ design
   - Responsive design for mobile and tablet
   - Professional gradient backgrounds and card layouts

### 3. **Dynamic Routing** (Updated `src/App.js`)
   - Added `DynamicLocationPage` component that loads JSON files dynamically
   - Route pattern: `/:location` catches all location URLs
   - Automatically imports JSON file based on URL parameter
   - Shows loading state while fetching data
   - Shows error page if location doesn't exist

### 4. **Data Structure** (`src/data/`)
   - Created `hitechcity.json` with complete location data
   - JSON structure includes: SEO, hero content, services, conditions, FAQs, contact info
   - README.md with instructions for adding new locations

## How It Works

1. **User visits** `/hitechcity`
2. **Router matches** the `/:location` route
3. **DynamicLocationPage** component extracts `location` parameter (`hitechcity`)
4. **Dynamically imports** `src/data/hitechcity.json`
5. **Passes data** to `LocationPage` component
6. **Renders** the complete page with all sections

## How to Add New Locations

### Step 1: Create JSON File
Create a new file in `src/data/` folder:
- Filename: `locationname.json` (lowercase, no spaces)
- Example: `madhapur.json`, `gachibowli.json`, `kondapur.json`

### Step 2: Copy Structure
Copy the content from `hitechcity.json` and modify:

```json
{
    "locationName": "Madhapur",
    "seoTitle": "Home & Doorstep Physiotherapy in Madhapur, Hyderabad | Rehabb Care",
    "seoDescription": "Expert physiotherapists at your doorstep in Madhapur...",
    "canonicalUrl": "https://rehabb.care/madhapur",
    "heroTitle": "Home & Doorstep Physiotherapy in Madhapur, Hyderabad",
    ...
}
```

### Step 3: Access the Page
- URL: `https://rehabb.care/madhapur`
- No code changes needed!
- The route is automatically created

## JSON Structure Reference

```json
{
    "locationName": "string",           // Display name
    "seoTitle": "string",               // Page title for SEO
    "seoDescription": "string",         // Meta description
    "canonicalUrl": "string",           // Canonical URL
    "heroTitle": "string",              // Main heading
    "heroSubtitle": "string",           // Subtitle
    "heroDescription": "string",        // Hero description
    "servingAreas": ["string"],         // Array of areas served
    "conditions": [                     // Array of conditions treated
        {
            "title": "string",
            "description": "string"
        }
    ],
    "whyChooseReasons": ["string"],     // Array of reasons
    "itProfessionalSection": {          // IT professionals section
        "title": "string",
        "description": "string",
        "issues": ["string"],
        "additionalInfo": "string"
    },
    "howItWorks": [                     // Steps array
        {
            "title": "string",
            "description": "string"
        }
    ],
    "faqs": [                           // FAQ array
        {
            "question": "string",
            "answer": "string"
        }
    ],
    "contactInfo": {                    // Contact information
        "website": "string",
        "phone": "string",
        "whatsapp": "string"
    }
}
```

## Features

✅ **Dynamic Routing** - Add JSON file, get automatic route
✅ **Same Design** - Exact same design as REHABB_PROJ
✅ **SEO Optimized** - Each page has unique title, description, canonical URL
✅ **Responsive** - Mobile and tablet friendly
✅ **Loading States** - Shows loading while fetching data
✅ **Error Handling** - Shows error page if location not found
✅ **Easy to Scale** - Just add more JSON files

## Testing

1. Start the development server:
   ```bash
   npm start
   ```

2. Visit: `http://localhost:3000/hitechcity`

3. You should see the complete location page with all sections

## Adding More Locations (Examples)

### Madhapur
1. Create `src/data/madhapur.json`
2. Copy from `hitechcity.json`
3. Update location-specific content
4. Access at `/madhapur`

### Gachibowli
1. Create `src/data/gachibowli.json`
2. Copy from `hitechcity.json`
3. Update location-specific content
4. Access at `/gachibowli`

### Kondapur
1. Create `src/data/kondapur.json`
2. Copy from `hitechcity.json`
3. Update location-specific content
4. Access at `/kondapur`

## Important Notes

- **Filename = URL**: `madhapur.json` creates `/madhapur` route
- **Lowercase**: Always use lowercase filenames
- **No Spaces**: Use hyphens for multi-word locations (e.g., `financial-district.json`)
- **Valid JSON**: Make sure JSON is properly formatted
- **No Code Changes**: Never need to modify App.js or LocationPage.js

## Troubleshooting

### Page Not Loading?
- Check if JSON file exists in `src/data/` folder
- Verify JSON is valid (use JSONLint.com)
- Check browser console for errors
- Restart development server

### Wrong Content Showing?
- Clear browser cache
- Check JSON file content
- Verify filename matches URL

### Styling Issues?
- Check if `LocationPage.css` is imported
- Verify image paths in `public/images/` folder
- Check browser console for CSS errors

## Files Created/Modified

### New Files:
- `src/locations/LocationPage.js` - Main component
- `src/locations/LocationPage.css` - Styling
- `src/data/hitechcity.json` - Sample data
- `src/data/README.md` - Data folder guide
- `LOCATION_PAGES_GUIDE.md` - This guide

### Modified Files:
- `src/App.js` - Added dynamic routing and imports

## Next Steps

1. Test the `/hitechcity` page
2. Create additional location JSON files as needed
3. Update content for each location
4. Add internal links from main site to location pages
5. Submit sitemap to Google with new location URLs
