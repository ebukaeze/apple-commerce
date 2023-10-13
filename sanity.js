import { createClient, SanityClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
token: process.env.SANITY_API_TOKEN,
projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
useCdn: process.env.NODE_ENV === "production",
};

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

/**
 * 
 * Set up a helper function for generating image URLs with only the asset reference data
 * in your documents.
 *  
 */

export const urlFor = (source) => createImageUrlBuilder(config).image(source);