"use client";

export default function Lab1() {
  return (
    <div id="wd-lab1">

      <h3>
        Name : Shruthi Kannan<br />
        NU Id: 002033928
      </h3>
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>

      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        Text documents are often broken up into several sections and subsections.
        Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes.
        For instance this paragraph is preceded by the heading Heading Tags.
        The font of the section headings are usually larger and bolder than their subsection headings.
        This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc.
        HTML heading tags can be used to format plain text so that it renders in a browser as large headings.
        There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6.
        Tag h1 is the largest heading and h6 is the smallest heading.
      </div>

      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1">
          This is a paragraph.
          We often separate a long set of sentences with vertical spaces to make the text easier to read.
          Browsers ignore vertical white spaces and render all the text as one single set of sentences.
          To force the browser to add vertical spacing, wrap the paragraphs you want to separate with the paragraph tag.
        </p>

        <p id="wd-p-2">
          This is the first paragraph.
          The paragraph tag is used to format vertical gaps between long pieces of text like this one.
          This is the second paragraph. Even though there is a deliberate white gap between the paragraph above and this paragraph, by default browsers render them as one contiguous piece of text.
          This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.
        </p>

        <p id="wd-p-3">
          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default
          browsers render them as one contiguous piece of text.
        </p>

        <p id="wd-p-4">
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
        </p>

        <div id="wd-lists">
          <h4>List Tags</h4>
          <h5>Ordered List Tag</h5>
          How to make pancakes:
          <ol id="wd-pancakes">
            <li>Mix dry ingredients.</li>
            <li>Add wet ingredients.</li>
            <li>Stir to combine.</li>
            <li>Heat a skillet or griddle.</li>
            <li>Pour batter onto the skillet.</li>
            <li>Cook until bubbly on top.</li>
            <li>Flip and cook the other side.</li>
            <li>Serve and enjoy!</li>
          </ol>

          <p id="wd-Paneer-Tikka">How to make Paneer Tikka:</p>

          <ol id="wd-your-favorite-recipe">
            <li>Mix dry ingredients, 200 grams of paneer and add yogurt.</li>
            <li>Allow ingredients to marinate for about 30 minutes.</li>
            <li>Heat up three tablespoons of oil in a pan and pour the mix into it.</li>
            <li>Roast and turn them, cooking on all sides for 3–4 minutes until they are light brown and cooked through.</li>
            <li>After cooking, brush the tikkas with melted butter or mustard oil for extra flavor.</li>
            <li>Sprinkle with chaat masala and a squeeze of fresh lemon juice.</li>
            <li>Paneer tikka is best served hot with mint chutney, sliced onions, and lemon wedges.</li>
            <li>Serve and Enjoy!</li>
          </ol>

          <h5>Unordered List Tag</h5>
          My favorite books (in no particular order):
          <ul id="wd-my-books">
            <li>Dune</li>
            <li>Lord of the Rings</li>
            <li>Ender's Game</li>
            <li>Red Mars</li>
            <li>The Forever War</li>
          </ul>

          My favorite books (in no particular order):
          <ul id="wd-your-books">
            <li>The cry of the Tiger</li>
            <li>White Nights</li>
            <li>Windmills of The Gods</li>
            <li>The Science of Rapid Skill Learning</li>
            <li>Autobiography of a yogi</li>
          </ul>
        </div>

        <div id="wd-tables">
          <h4>Table Tag</h4>
          <table border={1} width="100%">
            <thead>
              <tr>
                <th>Quiz</th>
                <th>Topic</th>
                <th>Date</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Q1","HTML","2/3/21","85"],
                ["Q2","CSS","2/10/21","90"],
                ["Q3","Bootstrap & Flex","2/17/21","78"],
                ["Q4","JavaScript & React","2/22/21","87"],
                ["Q5","Routing","2/29/21","68"],
                ["Q6","State & Redux","3/12/21","90"],
                ["Q7","Node","3/19/21","92"],
                ["Q8","Session","3/26/21","89"],
                ["Q9","MongoDB","4/7/21","100"],
                ["Q10","Mongoose","4/14/21","99"],
              ].map(([q, t, d, g]) => (
                <tr key={q}>
                  <td>{q}</td><td>{t}</td><td>{d}</td><td>{g}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr><td colSpan={3}>Average</td><td>90</td></tr>
            </tfoot>
          </table>
        </div>

        <div id="wd-images">
          <h4>Image tag</h4>
          Loading an image from the internet:<br />
          <img
            id="wd-starship"
            src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
            width="400px"
            height="250px"
            alt="Starship"
          /><br />
          Loading a local image:<br />
          <img
            id="wd-teslabot"
            src="/images/teslabot.jpg.jpg"
            width="200px"
            height="200px"
            alt="Teslabot"
          />
        </div>

        <div id="wd-forms">
          <h4>Form Elements</h4>
          <form id="wd-text-fields">
            <h5>Text Fields</h5>
            <label htmlFor="wd-text-fields-username">Username:</label>
            <input placeholder="jdoe" id="wd-text-fields-username" /> <br />
            <label htmlFor="wd-text-fields-password">Password:</label>
            <input type="password" defaultValue="123@#$asd" id="wd-text-fields-password" /><br />
            <label htmlFor="wd-text-fields-first-name">First name:</label>
            <input type="text" title="John" id="wd-text-fields-first-name" /> <br />
            <label htmlFor="wd-text-fields-last-name">Last name:</label>
            <input type="text" placeholder="Doe" defaultValue="Wonderland" title="The last name" id="wd-text-fields-last-name" />
            
            <h5>Text boxes</h5>
            <label>Biography:</label><br/>
            <textarea
              id="wd-textarea"
              cols={30}
              rows={10}
              defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
            />
            
            <h4>Other HTML field types</h4>
            <label htmlFor="wd-text-fields-email"> Email: </label>
            <input type="email" placeholder="jdoe@somewhere.com" id="wd-text-fields-email"/><br/>
            <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
            <input type="number" defaultValue={100000} placeholder="1000" id="wd-text-fields-salary-start"/><br/>
            <label htmlFor="wd-text-fields-rating"> Rating: </label>
            <input type="range" defaultValue={4} max={5} placeholder="Doe" id="wd-text-fields-rating"/><br/>
            <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
            <input type="date" defaultValue="2000-01-21" id="wd-text-fields-dob"/><br/>
          </form>
        </div>

        <h5 id="wd-buttons">Buttons</h5>
        <button type="button" onClick={() => alert("Life is Good!")} id="wd-all-good">
          Hello World!
        </button>

        <h5 id="wd-radio-buttons">Radio buttons</h5>
        <label>Favorite movie genre:</label><br />
        {["Comedy","Drama","Science Fiction","Fantasy"].map(genre => (
          <span key={genre}>
            <input type="radio" name="radio-genre" id={`wd-radio-${genre.toLowerCase().replace(" ","")}`} />
            <label htmlFor={`wd-radio-${genre.toLowerCase().replace(" ","")}`}>{genre}</label><br />
          </span>
        ))}

        <h5 id="wd-checkboxes">Checkboxes</h5>
        <label>Favorite movie genre:</label><br/>
        {["Comedy","Drama","Science Fiction","Fantasy"].map(genre => (
          <span key={genre}>
            <input type="checkbox" name="check-genre" id={`wd-chkbox-${genre.toLowerCase().replace(" ","")}`} />
            <label htmlFor={`wd-chkbox-${genre.toLowerCase().replace(" ","")}`}>{genre}</label><br/>
          </span>
        ))}

        <h4 id="wd-dropdowns">Dropdowns</h4>
        <h5>Select one</h5>
        <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br/>
        <select id="wd-select-one-genre" defaultValue="SCIFI">
          <option value="COMEDY">Comedy</option>
          <option value="DRAMA">Drama</option>
          <option value="SCIFI">Science Fiction</option>
          <option value="FANTASY">Fantasy</option>
        </select>

        <h5>Select many</h5>
        <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br/>
        <select multiple id="wd-select-many-genre" defaultValue={["COMEDY","SCIFI"]}>
          <option value="COMEDY"> Comedy </option>
          <option value="DRAMA"> Drama </option>
          <option value="SCIFI"> Science Fiction </option>
          <option value="FANTASY"> Fantasy </option>
        </select>

        <h4>Anchor tag</h4>
        Please <a href="https://www.lipsum.com" id="wd-lipsum">click here</a> to get dummy text<br/>
        Please <a href="https://github.com/sk28352/kambaz-next-js" id="wd-github">click here</a> to get to github repository<br/>

      </div>
    </div>
  );
}
