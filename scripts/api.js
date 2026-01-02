const FIREBASE_URL = "https://join-19b54-default-rtdb.europe-west1.firebasedatabase.app/";

/**
 * Loads data from the specified path in the Firebase Realtime Database.
 * @async
 * @function
 * @param {string} path - The path to the data in the database.
 * @returns {Promise<object>} A promise that resolves to the data from the database.
 */
async function loadFromDatabase(path) {
    try {
        let response = await fetch(FIREBASE_URL + path + ".json");
        let responseToJson = await response.json();

        return responseToJson
    } catch (error) {
        throw new Error("Failed to fetch firebase url", error)
    }
}

/**
 * Posts new data to the specified path in the Firebase Realtime Database.
 * @async
 * @function postToDatabase
 * @param {string} path – Firebase-Pfad (z. B. "contacts")
 * @param {object} data – Das zu speichernde Objekt
 * @returns {Promise<{name: string}>} – Das JSON mit dem generierten Key
 */
async function postToDatabase(path, data) {
    const res = await fetch(`${FIREBASE_URL}${path}.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`POST ${path} failed (${res.status})`);
    return await res.json();  // <-- hier kommt { name: "-Mx123ABC" }
}

/**
 * Updates data at the specified path in the Firebase Realtime Database.
 * @async
 * @function
 * @param {string} path - The path where the data should be updated.
 * @param {object} data - The data to be updated.
 * @returns {Promise<object>} A promise that resolves to the response data from the database.
 */
async function updateOnDatabase(path, data) {
    let response = await fetch(FIREBASE_URL + path + ".json", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return (responseToJson = await response.json());
}

/**
 * Deletes data from the specified path in the Firebase Realtime Database.
 * @async
 * @function
 * @param {string} path - The path to the data to be deleted.
 * @returns {Promise<object>} A promise that resolves to the response data from the database.
 */
async function deleteFromDatabase(path) {
  let response = await fetch(FIREBASE_URL + path + ".json", {
    method: "DELETE",
  });
  return (responseToJson = await response.json());
}