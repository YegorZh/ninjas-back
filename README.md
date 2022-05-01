# Ninjas back

<h2>Scripts</h2>
<h3>npm run dev</h3>
<p>Starts project with auto reload from src/index.ts</p>
<h3>npm run build</h3>
<p>Builds project to build</p>
<h3>npm start</h3>
<p>Starts project from build/index.js</p>

<h2>Schema</h2>
<ul>
<li>nickname: heroes' nickname (Superman). String. </li>
<li>realName: real name (Clark Kent). String. </li>
<li>originDescription: description of heroes' origin (he was born Kal-El on the planet Krypton, before being rocketed to
Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...). String.</li>
<li>superpowers: list of superpowers (solar energy absorption and healing factor, solar flare and heat vision,
solar invulnerability, flight...). String.</li>
<li>
catchPhrase: catchphrase related to hero (“Look, up in the sky, it's a bird, it's a plane, it's Superman!”). String.
</li>
<li>
images: set of images, takes an array of strings that contain image urls. String[].
</li>
</ul>

<h2>Endpoints</h2>
<h3>/heroes</h3>
<ul>
<li>GET: returns an array of all heroes</li>
<li>POST: adds new hero, images and nickname are required for successful post.</li>
</ul>
<h3>/heroes/:id</h3>
<ul>
<li>GET: returns one hero by _id</li>
<li>PATCH: updates one hero by _id</li>
<li>DELETE: deletes one hero by _id</li>
</ul>
<hr>
P.S.
Frontend can be found <a href="https://github.com/YegorZh/Superheroes">here</a>
