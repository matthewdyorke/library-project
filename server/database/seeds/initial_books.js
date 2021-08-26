exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("books")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("books").insert([
        {
          title: "The Hobbit",
          author: "J. R. R. Tolkien",
          isbn: "9780044403371",
          checked_out: 0,
          due_date: null,
          url: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
        },
        {
          title: "Moby Dick",
          author: "Herman Melville",
          isbn: "9780393972832",
          checked_out: 0,
          due_date: null,
          url: "https://kbimages1-a.akamaihd.net/ae25aaf3-7841-4b90-a175-8e55ca639064/1200/1200/False/moby-dick-222.jpg",
        },
        {
          title: "1984",
          author: "George Orwell",
          isbn: "9780155658110",
          checked_out: 0,
          due_date: null,
          url: "https://anylang.net/sites/default/files/covers/1984.jpg",
        },
      ]);
    });
};
