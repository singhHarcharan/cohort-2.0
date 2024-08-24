        // map, filter and arrow function.
        // There is no global Map or Filter function to use in javascript
        // But as we can pass function in a another function as a parameter
        // So, We are just using that to make 'map' and 'filter'

        // ARROW FUNCTION

        // normal function
        function sum(a, b) {
            return a + b;
        }
        // arrow function
        const sum = (a, b) => {
            return a + b;
        }
        // normal function
        app.get("/", function (req, res) {

        })
        // arrow function
        app.get("/", (req, res) => {

        })


        // -----------------------------------------------------


        // MAPS AND FILTER

        // given an array, give me back a new array in which every value 
        // is multiplied by 2 using Map
        // [1, 2, 3, 4]
        // [2, 4, 6, 8]

        const arr = [1, 2, 3, 4, 5];

        function transform(i) {
            return i * 2;
        }

        // Map will apply given function to the every element of the array
        const ans = arr.map(transform);
        console.log(ans);


        // ANOTHER SYNTAX -> using Anonymous function
        const ans = arr.map(function (i) {
            return i * 2;
        });
        console.log(ans);

        // -------------------------------------------------------

        // FILTER
        // Given an input array, give me back all the even values from it.
        const arr = [1, 2, 3, 4, 5, 6];

        function isEven(a) {
            if (a % 2 == 0) return true;
            else return false;
        }

        const result = arr.filter(isEven);


        // ANOTHER SYNTAX -> Using an arrow function
        const result = arr.filter((a) => {
            if (a % 2 == 0) return true;
            else return false;
        })

        console.log(result);