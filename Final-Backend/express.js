const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
app.use(express.json())
const mongoose = require('mongoose');


// MongoDB Connection URI
const uri = "mongodb+srv://Pavan:kumar123@cluster0.pfirt1o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
  
});

// Connect to MongoDB
async function connectToMongoDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

connectToMongoDB();



app.use(express.json()); 
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));


// Cart Item Schema
// const cartItemSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
//   itemname: { type: String, required: true },
//   quantity: { type: Number, required: true },
//   price: { type: Number, required: true },
//   image: { type: String, required: true }
// });

// const CartItem = mongoose.model('CartItem', cartItemSchema);

// app.post('/addreview', async (req, res) => {
//   try {
//     const { name, message, rating, photo } = req.body;

//     if (!name || !message || !rating) {
//       return res.status(400).send({ status: 'error', message: 'Required fields are missing.' });
//     }

//     // Create a new review instance using the Review model
//     const newReview = new Review({
//       name,
//       message,
//       rating,
//       photo // Optional field
//     });

//     // Save the new review
//     const result = await newReview.save();

//     // Fetch all reviews after saving the new one
//     const allReviews = await Review.find();

//     // Send the response with the new review and all reviews
//     res.status(201).send({ status: 'success', data: { newReview: result, allReviews } });
//   } catch (error) {
//     console.error('Backend error:', error); // Log the error details for debugging
//     res.status(500).send({ status: 'error', message: 'An error occurred while processing your request.', error: error.message });
//   }
// });






app.listen(3008, () => {
  console.log("Server is running on port 3008");

  app.get("/", (req, res) => {
    console.log("Root endpoint called");
    res.send("Server is running");
  });

  app.post("/signin", async (req, res) => {
    try {
        const { email, username } = req.body;

        const database = client.db('Restaurant');
        const collection = database.collection('user');

        // Check if the user already exists
        const existingUser = await collection.findOne({ $or: [{ email }, { username }] });

        if (existingUser) {
            return res.status(409).send({ status: "failure", message: "User already exists" });
        }

        // Insert the new user
        const result = await collection.insertOne(req.body);

        if (result.insertedId) {
            res.status(201).send({ status: "success", userId: result.insertedId });
        } else {
            res.status(500).send({ status: "failure", message: "Failed to add user" });
        }
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});




  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    //console.log("Login request received");

    const database = client.db('Restaurant');
    const collection = database.collection('user');
    const result = await collection.findOne({ email: email, password: password });

    if (result) {
      res.send({ status: "success", data: result });
    } else {
      res.send({ status: "failure", message: "Invalid email or password" });
    }
  });

  
  // app.post("/menuitems", async (req, res) => {
  //   const { product_id, image, itemname, rating, itemdescription, price } = req.body;
  //   console.log("Adding menu item");

  //   const database = client.db('Restaurant');
  //   const collection = database.collection('veg_starters');
  //   const result = await collection.insertOne({product_id, image, itemname, rating, itemdescription, price});

  //   if (result) {
  //     console.log("Item added");
  //     res.send({ status: "success" });
  //   } else {
  //     res.send({ status: "failure", message: "Failed to add item" });
  //   }
  // });

  app.get("/chickengravy", async (req, res) => {
    try {
      const database = client.db('Restaurant');
      const collection = database.collection('chicken_gravy');
      const menuItems = await collection.find({}).toArray();
  
      res.send({ status: "success", data: menuItems });
    } catch (err) {
      res.status(500).send({ status: "error", message: "Internal Server Error" });
    }
  });


  app.get("/biryani", async (req, res) => {
    try {
      const database = client.db('Restaurant');
      const collection = database.collection('biryani');
      const menuItems = await collection.find({}).toArray();
  
      res.send({ status: "success", data: menuItems });
    } catch (err) {
      res.status(500).send({ status: "error", message: "Internal Server Error" });
    }
  });
  app.get("/chickentandoori", async (req, res) => {
    try {
      const database = client.db('Restaurant');
      const collection = database.collection('chicken_tandoori');
      const menuItems = await collection.find({}).toArray();
  
      res.send({ status: "success", data: menuItems });
    } catch (err) {
      res.status(500).send({ status: "error", message: "Internal Server Error" });
    }
  });

  app.get("/dryveggies", async (req, res) => {
    try {
      const database = client.db('Restaurant');
      const collection = database.collection('dry_veggies');
      const menuItems = await collection.find({}).toArray();
  
      res.send({ status: "success", data: menuItems });
    } catch (err) {
      res.status(500).send({ status: "error", message: "Internal Server Error" });
    }
  });

  app.get("/familypack", async (req, res) => {
    try {
      const database = client.db('Restaurant');
      const collection = database.collection('family_pack');
      const menuItems = await collection.find({}).toArray();
  
      res.send({ status: "success", data: menuItems });
    } catch (err) {
      res.status(500).send({ status: "error", message: "Internal Server Error" });
    }
  });

  app.get("/mutton", async (req, res) => {
    try {
      const database = client.db('Restaurant');
      const collection = database.collection('mutton');
      const menuItems = await collection.find({}).toArray();
  
      res.send({ status: "success", data: menuItems });
    } catch (err) {
      res.status(500).send({ status: "error", message: "Internal Server Error" });
    }
  });
  app.get("/vegcurries", async (req, res) => {
    try {
      const database = client.db('Restaurant');
      const collection = database.collection('veg_curries');
      const menuItems = await collection.find({}).toArray();
  
      res.send({ status: "success", data: menuItems });
    } catch (err) {
      res.status(500).send({ status: "error", message: "Internal Server Error" });
    }
  });
  app.get("/vegrice", async (req, res) => {
    try {
      const database = client.db('Restaurant');
      const collection = database.collection('veg_rice');
      const menuItems = await collection.find({}).toArray();
  
      res.send({ status: "success", data: menuItems });
    } catch (err) {
      res.status(500).send({ status: "error", message: "Internal Server Error" });
    }
  });

  app.get("/vegsoups", async (req, res) => {
    try {
      const database = client.db('Restaurant');
      const collection = database.collection('veg_soups');
      const menuItems = await collection.find({}).toArray();
  
      res.send({ status: "success", data: menuItems });
    } catch (err) {
      res.status(500).send({ status: "error", message: "Internal Server Error" });
    }
  });

  app.get("/vegstarters", async (req, res) => {
    try {
      const database = client.db('Restaurant');
      const collection = database.collection('veg_starters');
      const menuItems = await collection.find({}).toArray();
  
      res.send({ status: "success", data: menuItems });
    } catch (err) {
      res.status(500).send({ status: "error", message: "Internal Server Error" });
    }
  });

  app.get("/nonvegstarters", async (req, res) => {
    try {
      const database = client.db('Restaurant');
      const collection = database.collection('non_veg_starters');
      const menuItems = await collection.find({}).toArray();
  
      res.send({ status: "success", data: menuItems });
    } catch (err) {
      res.status(500).send({ status: "error", message: "Internal Server Error" });
    }
  });
  app.get("/menuitems", async (req, res) => {
    try {
      const database = client.db('Restaurant');
      const collection = database.collection('menuitems');
      const menuItems = await collection.find({}).toArray();
  
      res.send({ status: "success", data: menuItems });
    } catch (err) {
      res.status(500).send({ status: "error", message: "Internal Server Error" });
    }
  });


  app.post("/addreview", async (req, res) => {
    try {
      const { name, message, rating, photo } = req.body;
  
      // Validate required fields
      if (!name || !message || !rating) {
        return res.status(400).send({ status: 'error', message: 'Required fields are missing.' });
      }
  
      const database = client.db('Restaurant');
      const collection = database.collection('Reviews');
  
      // Insert the new review
      const result = await collection.insertOne({
        name,
        message,
        rating,
        photo
      });
  
      if (result.insertedId) {
        // Fetch all reviews after saving the new one
        const allReviews = await collection.find().toArray();
  
        // Send the response with the new review and all reviews
        res.status(201).send({ status: 'success', data: { newReview: result.insertedId, allReviews } });
      } else {
        res.status(500).send({ status: 'failure', message: 'Failed to add review' });
      }
    } catch (error) {
      console.error('Backend error:', error); // Log the error details for debugging
      res.status(500).send({ status: 'error', message: 'An error occurred while processing your request.', error: error.message });
    }
  });

  
  app.get("/reviews", async (req, res) => {
    try {
      const database = client.db('Restaurant');
      const collection = database.collection('Reviews');
      const menuItems = await collection.find({}).toArray();
  
      res.send({ status: "success", data: menuItems });
    } catch (err) {
      res.status(500).send({ status: "error", message: "Internal Server Error" });
    }
  });
  


  // app.post("/cart/add", async (req, res) => {
  //   try {
  //     const { userId, itemId, itemname, quantity, price, image } = req.body;

  //     const newCartItem = new CartItem({
  //       userId,
  //       itemId,
  //       itemname,
  //       quantity,
  //       price,
  //       image
  //     });

  //     const result = await newCartItem.save();

  //     res.status(201).send({ status: "success", data: result });
  //   } catch (error) {
  //     res.status(500).send({ status: "error", message: error.message });
  //   }
  // });

  // // Update Cart Item Quantity
  // app.put("/cart/update/:id", async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const { quantity } = req.body;

  //     const result = await CartItem.findByIdAndUpdate(
  //       id,
  //       { quantity },
  //       { new: true }
  //     );

  //     if (result) {
  //       res.send({ status: "success", data: result });
  //     } else {
  //       res.status(404).send({ status: "failure", message: "Cart item not found" });
  //     }
  //   } catch (error) {
  //     res.status(500).send({ status: "error", message: error.message });
  //   }
  // });

  // // Remove Cart Item
  // app.delete("/cart/remove/:id", async (req, res) => {
  //   try {
  //     const { id } = req.params;

  //     const result = await CartItem.findByIdAndDelete(id);

  //     if (result) {
  //       res.send({ status: "success", message: "Cart item removed" });
  //     } else {
  //       res.status(404).send({ status: "failure", message: "Cart item not found" });
  //     }
  //   } catch (error) {
  //     res.status(500).send({ status: "error", message: error.message });
  //   }
  // });

  // // Get Cart Items for a User
  // app.get("/cart/:userId", async (req, res) => {
  //   try {
  //     const { userId } = req.params;

  //     const cartItems = await CartItem.find({ userId });

  //     res.send({ status: "success", data: cartItems });
  //   } catch (error) {
  //     res.status(500).send({ status: "error", message: error.message });
  //   }
  // });


  // app.get('/reviews', async (req, res) => {
  //   try {
  //     const reviews = await Review.find().sort({ date: -1 });
  //     res.send({ status: 'success', data: reviews });
  //   } catch (error) {
  //     res.status(500).send({ status: 'error', message: error.message });
  //   }
  // });

  
  

  
});


