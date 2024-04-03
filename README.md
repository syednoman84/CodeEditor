# Steps to run the project
1. Update the directory path to your local directories as shown below for the app.use and res.sendFile:
   <img width="369" alt="image" src="https://github.com/syednoman84/CodeEditor/assets/24880733/1a299fa6-2123-4866-82e8-9f645ef4bb14">

2. Install the nodemon globally using this command: `npm install -g nodemon`
3. Install these packages: `npm install express body-parser compilex"
4. Run the nodemon for Api.js using command `nodemon Api.js`
5. Access the app on the localhost:8000

Note that this repo already has the codemirror library as codemirror-5.65.16 part of the project. In case you want to run on a newer version, you can go to this location and download a newer one and use that instead. You will have to make the updates to the codemirror version in your html/js files.
![image](https://github.com/syednoman84/CodeEditor/assets/24880733/381b645b-c357-4a31-b67d-82dc1a830426)

![image](https://github.com/syednoman84/CodeEditor/assets/24880733/cadb3170-e5de-47c7-be67-b207e802a2e7)

![image](https://github.com/syednoman84/CodeEditor/assets/24880733/129c48b0-9e09-4a98-b16b-22a61e0fcffa)


## Working code that you can copy and paste in the editor
```java
import java.util.*;
import java.util.stream.Collectors;

import static java.util.Arrays.asList;
import static java.util.stream.Collectors.toList;


public class Main {
    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int x = sc.nextInt();
      int y = sc.nextInt();
      int sum = sum(x, y);
      System.out.println(sum);
      List<List<String>> collection = asList(asList("Viktor", "Farcic"), asList("John", "Doe", "Third"));
      System.out.println(collection.stream().flatMap(Collection::stream).collect(toList()));
      System.out.println(collection.stream().flatMap(Collection::stream).collect(Collectors.toList()));
      
       // Custom object of User type
        List<User> users = Arrays.asList(
                new User("C", 30, 25000),
                new User("D", 40, 150000),
                new User("A", 10, 10000),
                new User("B", 20, 300000),
                new User("E", 50, 90000));

        // Sorting users by age
        List<User> sortedCustomUserList = users.stream()
                // you can use any of the two comparison methods which gives the same results
                .sorted(Comparator.comparingInt(User::getAge))
                //.sorted((o1, o2) -> o1.getAge() - o2.getAge())
                .collect(Collectors.toList());

        sortedCustomUserList.forEach(System.out::println);

        // Finding Max age
        Integer maxAge = users.stream()
                .mapToInt(User::getAge)
                .max()
                .orElseThrow(NoSuchElementException::new);
        System.out.println("Max Age is: " + maxAge);

        // Finding sum of salaries
        Integer sumSal = users.stream()
                .map(User::getSalary)
                .reduce(0, Integer::sum);

        System.out.println("Total of Salaries is: " + sumSal);

        // Joining all user names as comma separated
        String userNames = users.stream()
                .map(User::getName)
                .collect(Collectors.joining(", "))
                .toString();

        System.out.println(userNames);


    }
  
  public static int sum(int a, int b){
    return a + b;
  }
}

// helper class
class User {

    private String name;
    private int age;
    private int salary;

    public User(String name, int age, int salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", salary=" + salary +
                '}';
    }
}
```

