// public/did.js

export function generateDID() {
    // The DID method name. For example, "did:example".
    const didMethod = "did:example";
  
    // Generate a random identifier or use some logic to create a unique ID.
    const uniqueId = Math.random().toString(36).substring(2);
  
    // Combine the DID method and the unique ID to create the full DID.
    const did = `${didMethod}:${uniqueId}`;
  
    return did;
  }
  
