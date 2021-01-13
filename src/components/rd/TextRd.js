import React from "react"
import styled from "styled-components"
import ReactReadMoreReadLess from "react-read-more-read-less"

const TextRd = () => {
  return (
    <TextContainer>
      <TopLine>Browse Our Papers</TopLine>
      <ContentWrapper>
        <Paper>
          <h3>Omega and Sharpe Ratio</h3>
          <p>
            <ExternalLink href={"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3469888"} target="_blank">
                SSRN:3469888
            </ExternalLink>
            <ExternalLink href={"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3469888"} target="_blank">
                 [pdf]
            </ExternalLink> 
          </p>

          <br />
          <p>
            Authors:
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Eric Benhamou,
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/search/?query=beatrice+guez&searchtype=all&source=header"} target="_blank">
                Beatrice Guez,
            </ExternalLink> 
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Paris1%2C+N"} target="_blank">
                Nicolas Paris
            </ExternalLink> 
          </p>
          <br />

          <p>
            <ReactReadMoreReadLess
              charLimit={300}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
            >
              Abstract:Omega ratio, defined as the probability-weighted ratio of
              gains over losses at a given level of expected return, has been
              advocated as a better performance indicator compared to Sharpe and
              Sortino ratio as it depends on the full return distribution and
              hence encapsulates all information about risk and return. We
              compute Omega ratio for the normal distribution and show that
              under some distribution symmetry assumptions, the Omega ratio is
              oversold as it does not provide any additional information
              compared to Sharpe ratio. Indeed, for returns that have elliptic
              distributions, we prove that the optimal portfolio according to
              Omega ratio is the same as the optimal portfolio according to
              Sharpe ratio. As elliptic distributions are a weak form of
              symmetric distributions that generalized Gaussian distributions
              and encompass many fat tail distributions, this reduces
              tremendously the potential interest for the Omega ratio.
            </ReactReadMoreReadLess>
          </p>
          <br />
          <p>Submitted: October 14, 2019</p>
        </Paper>
        <Paper>
          <h3>Variance Reduction in Actor Critic Methods (ACM)</h3>
          <p>
            <ExternalLink href={"https://arxiv.org/abs/1907.09765"} target="_blank">
                arXiv:1907.09765
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/abs/1907.09765"} target="_blank">
                [pdf]
            </ExternalLink> 
          </p>
          <br />
          <p>
            Authors:
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Eric Benhamou
            </ExternalLink>
          </p>
          <br />
          <p>
            <ReactReadMoreReadLess
              charLimit={300}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
            >
              Abstract: After presenting Actor Critic Methods (ACM), we show ACM are control variate estimators. Using the projection theorem, we prove that the Q and Advantage Actor Critic (A2C) methods are optimal in the sense of the L2 norm for the control variate estimators spanned by functions conditioned by the current state and action. This straightforward application of Pythagoras theorem provides a theoretical justification of the strong performance of QAC and AAC most often referred to as A2C methods in deep policy gradient methods. This enables us to derive a new formulation for Advantage Actor Critic methods that has lower variance and improves the traditional A2C method.
            </ReactReadMoreReadLess>
          </p>
          <br />
          <p>Submitted: July, 2019</p>
        </Paper>
        <Paper>
          <h3>
          Testing Sharpe ratio: luck or skill?
          </h3>
          <p>
            <ExternalLink href={"https://arxiv.org/abs/1905.08042"} target="_blank">
                arXiv:1905.08042
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/abs/1905.08042"} target="_blank">
                [pdf]
            </ExternalLink> 
          </p>

          <br />
          <p>
            Authors:
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Eric Benhamou,
            </ExternalLink>
            <ExternalLink href={"rhttps://arxiv.org/search/cs?searchtype=author&query=Saltiel%2C+D"} target="_blank">
                David Saltiel,
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/search/?query=beatrice+guez&searchtype=all&source=header"} target="_blank">
                Beatrice Guez,
            </ExternalLink> 
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Paris1%2C+N"} target="_blank">
                Nicolas Paris
            </ExternalLink> 
          </p>
          <br />

          <p>
            <ReactReadMoreReadLess
              charLimit={300}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
            >
            Abstract: Sharpe ratio (sometimes also referred to as information ratio) is widely used in asset management to compare and benchmark funds and asset managers. It computes the ratio of the (excess) net return over the strategy standard deviation. However, the elements to compute the Sharpe ratio, namely, the expected returns and the volatilities are unknown numbers and need to be estimated statistically. This means that the Sharpe ratio used by funds is likely to be error prone because of statistical estimation errors. In this paper, we provide various tests to measure the quality of the Sharpe ratios. By quality, we are aiming at measuring whether a manager was indeed lucky of skillful. The test assesses this through the statistical significance of the Sharpe ratio. We not only look at the traditional Sharpe ratio but also compute a modified Sharpe insensitive to used Capital. We provide various statistical tests that can be used to precisely quantify the fact that the Sharpe is statistically significant. We illustrate in particular the number of trades for a given Sharpe level that provides statistical significance as well as the impact of auto-correlation by providing reference tables that provides the minimum required Sharpe ratio for a given time period and correlation. We also provide for a Sharpe ratio of 0.5, 1.0, 1.5 and 2.0 the skill percentage given the auto-correlation level.            
            </ReactReadMoreReadLess>
          </p>
          <br />
          <p>Submitted: May, 2019</p>
        </Paper>
        <Paper>
          <h3>
          NGO-GM: Natural Gradient Optimization for Graphical Models
          </h3>
          <p>
            <ExternalLink href={"https://arxiv.org/abs/1905.05444"} target="_blank">
                arXiv:1905.05444 
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/abs/1905.05444"} target="_blank">
                [pdf]
            </ExternalLink> 
          </p>

          <br />
          <p>
            Authors:
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Eric Benhamou,
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Jamal Atif,
            </ExternalLink> 
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Rida Laraki,
            </ExternalLink>
            <ExternalLink href={"rhttps://arxiv.org/search/cs?searchtype=author&query=Saltiel%2C+D"} target="_blank">
                David Saltiel,
            </ExternalLink>
          </p>
          <br />
          
          <p>
            <ReactReadMoreReadLess
              charLimit={300}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
            >
            Abstract: This paper deals with estimating model parameters in graphical models. We reformulate it as an information geometric optimization problem and introduce a natural gradient descent strategy that incorporates additional meta parameters. We show that our approach is a strong alternative to the celebrated EM approach for learning in graphical models. Actually, our natural gradient based strategy leads to learning optimal parameters for the final objective function without artificially trying to fit a distribution that may not correspond to the real one. We support our theoretical findings with the question of trend detection in financial markets and show that the learned model performs better than traditional practitioner methods and is less prone to overfitting.          
            </ReactReadMoreReadLess>
            </p>
          <br />
          <p>Submitted: May, 2019</p>
        </Paper>
        <Paper>
          <h3>
          Similarities between policy gradient methods (PGM) in Reinforcement learning (RL) and supervised learning (SL)          </h3>
          <p>
            <ExternalLink href={"https://arxiv.org/abs/1904.06260"} target="_blank">
                arXiv:1904.06260
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/abs/1904.06260"} target="_blank">
                [pdf]
            </ExternalLink> 
          </p>

          <br />
          <p>
            Authors:
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Eric Benhamou,
            </ExternalLink>
          </p>
          <br />

          <p>
            <ReactReadMoreReadLess
              charLimit={300}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
            >
            Abstract: Reinforcement learning (RL) is about sequential decision making and is traditionally opposed to supervised learning (SL) and unsupervised learning (USL). In RL, given the current state, the agent makes a decision that may influence the next state as opposed to SL (and USL) where, the next state remains the same, regardless of the decisions taken, either in batch or online learning. Although this difference is fundamental between SL and RL, there are connections that have been overlooked. In particular, we prove in this paper that gradient policy method can be cast as a supervised learning problem where true label are replaced with discounted rewards. We provide a new proof of policy gradient methods (PGM) that emphasizes the tight link with the cross entropy and supervised learning. We provide a simple experiment where we interchange label and pseudo rewards. We conclude that other relationships with SL could be made if we modify the reward functions wisely.            </ReactReadMoreReadLess>
            </p>
          <br />
          <p>Submitted: May, 2019</p>
        </Paper>
        <Paper>
          <h3>
          BCMA-ES II: revisiting Bayesian CMA-ES
          </h3>
          <p>
            <ExternalLink href={"https://arxiv.org/abs/1904.01466"} target="_blank">
                arXiv:1904.01466 
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/abs/1904.01466"} target="_blank">
                [pdf]
            </ExternalLink> 
          </p>

          <br />
          <p>
            Authors:
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Eric Benhamou,
            </ExternalLink>
            <ExternalLink href={"rhttps://arxiv.org/search/cs?searchtype=author&query=Saltiel%2C+D"} target="_blank">
                David Saltiel,
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/search/?query=beatrice+guez&searchtype=all&source=header"} target="_blank">
                Beatrice Guez,
            </ExternalLink> 
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Paris1%2C+N"} target="_blank">
                Nicolas Paris
            </ExternalLink> 
          </p>
          <br />

          <p>
            <ReactReadMoreReadLess
              charLimit={300}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
            >
            Abstract: This paper revisits the Bayesian CMA-ES and provides updates for normal Wishart. It emphasizes the difference between a normal and normal inverse Wishart prior. After some computation, we prove that the only difference relies surprisingly in the expected covariance. We prove that the expected covariance should be lower in the normal Wishart prior model because of the convexity of the inverse. We present a mixture model that generalizes both normal Wishart and normal inverse Wishart model. We finally present various numerical experiments to compare both methods as well as the generalized method.            
            </ReactReadMoreReadLess>
          </p>
          <br />
          <p>Submitted: April, 2019</p>
        </Paper>
        <Paper>
          <h3>
          BCMA-ES: A Bayesian approach to CMA-ES
          </h3>
          <p>
            <ExternalLink href={"https://arxiv.org/abs/1904.01401"} target="_blank">
                arXiv:1904.01401 
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/abs/1904.01401"} target="_blank">
                [pdf]
            </ExternalLink> 
          </p>

          <br />
          <p>
            Authors:
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Eric Benhamou,
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Jamal Atif,
            </ExternalLink> 
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Rida Laraki,
            </ExternalLink>
          </p>
          <br />
          <p>
            <ReactReadMoreReadLess
              charLimit={300}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
            >
            Abstract: This paper introduces a novel theoretically sound approach for the celebrated CMA-ES algorithm. Assuming the parameters of the multi variate normal distribution for the minimum follow a conjugate prior distribution, we derive their optimal update at each iteration step. Not only provides this Bayesian framework a justification for the update of the CMA-ES algorithm but it also gives two new versions of CMA-ES either assuming normal-Wishart or normal-Inverse Wishart priors, depending whether we parametrize the likelihood by its covariance or precision matrix. We support our theoretical findings by numerical experiments that show fast convergence of these modified versions of CMA-ES.            </ReactReadMoreReadLess>
          </p>
          <br />
          <p>Submitted: April, 2019</p>
        </Paper>
        <Paper>
          <h3>
          A discrete version of CMA-ES
          </h3>
          <p>
            <ExternalLink href={"https://arxiv.org/abs/1812.11859"} target="_blank">
                arXiv:1812.11859
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/abs/1812.11859"} target="_blank">
                [pdf]
            </ExternalLink> 
          </p>

          <br />
          <p>
            Authors:
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Eric Benhamou,
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Jamal Atif,
            </ExternalLink> 
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Rida Laraki,
            </ExternalLink>
          </p>
          <br />

          <br />
          <p>
            Authors:
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Eric Benhamou,
            </ExternalLink>
            <ExternalLink href={"rhttps://arxiv.org/search/cs?searchtype=author&query=Saltiel%2C+D"} target="_blank">
                David Saltiel,
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/search/?query=beatrice+guez&searchtype=all&source=header"} target="_blank">
                Beatrice Guez,
            </ExternalLink> 
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Paris1%2C+N"} target="_blank">
                Nicolas Paris
            </ExternalLink> 
          </p>
          <br />

          <p>
            <ReactReadMoreReadLess
              charLimit={300}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
            >
            Abstract: Modern machine learning uses more and more advanced optimization techniques to find optimal hyper parameters. Whenever the objective function is non-convex, non continuous and with potentially multiple local minima, standard gradient descent optimization methods fail. A last resource and very different method is to assume that the optimum(s), not necessarily unique, is/are distributed according to a distribution and iteratively to adapt the distribution according to tested points. These strategies originated in the early 1960s, named Evolution Strategy (ES) have culminated with the CMA-ES (Covariance Matrix Adaptation) ES. It relies on a multi variate normal distribution and is supposed to be state of the art for general optimization program. However, it is far from being optimal for discrete variables. In this paper, we extend the method to multivariate binomial correlated distributions. For such a distribution, we show that it shares similar features to the multi variate normal: independence and correlation is equivalent and correlation is efficiently modeled by interaction between different variables. We discuss this distribution in the framework of the exponential family. We prove that the model can estimate not only pairwise interactions among the two variables but also is capable of modeling higher order interactions. This allows creating a version of CMA ES that can accommodate efficiently discrete variables. We provide the corresponding algorithm and conclude.
            </ReactReadMoreReadLess>
          </p>
          <br />
          <p>Submitted: February, 2019</p>
        </Paper>
        <Paper>
          <h3>
          A new approach to learning in Dynamic Bayesian Networks (DBNs)
          </h3>
          <p>
            <ExternalLink href={"https://arxiv.org/abs/1812.09027"} target="_blank">
                arXiv:1812.09027 
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/abs/1812.09027"} target="_blank">
                [pdf]
            </ExternalLink> 
          </p>

          <br />
          <p>
            Authors:
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Eric Benhamou,
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Jamal Atif,
            </ExternalLink> 
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Rida Laraki,
            </ExternalLink>
          </p>
          <br />

          <p>
            <ReactReadMoreReadLess
              charLimit={300}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
            >
            Abstract: In this paper, we revisit the parameter learning problem, namely the estimation of model parameters for Dynamic Bayesian Networks (DBNs). DBNs are directed graphical models of stochastic processes that encompasses and generalize Hidden Markov models (HMMs) and Linear Dynamical Systems (LDSs). Whenever we apply these models to economics and finance, we are forced to make some modeling assumptions about the state dynamics and the graph topology (the DBN structure). These assumptions may be incorrectly specified and contain some additional noise compared to reality. Trying to use a best fit approach through maximum likelihood estimation may miss this point and try to fit at any price these models on data. We present here a new methodology that takes a radical point of view and instead focus on the final efficiency of our model. Parameters are hence estimated in terms of their efficiency rather than their distributional fit to the data. The resulting optimization problem that consists in finding the optimal parameters is a hard problem. We rely on Covariance Matrix Adaptation Evolution Strategy (CMA-ES) method to tackle this issue. We apply this method to the seminal problem of trend detection in financial markets. We see on numerical results that the resulting parameters seem less error prone to over fitting than traditional moving average cross over trend detection and perform better. The method developed here for algorithmic trading is general. It can be applied to other real case applications whenever there is no physical law underlying our DBNs.            </ReactReadMoreReadLess>
          </p>
          <br />
          <p>Submitted: February, 2019</p>
        </Paper>
        <Paper>
          <h3>
          Trade Selection with Supervised Learning and OCA
          </h3>
          <p>
            <ExternalLink href={"https://arxiv.org/abs/1812.04486"} target="_blank">
                arXiv:1812.04486 
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/abs/1812.04486"} target="_blank">
                [pdf]
            </ExternalLink> 
          </p>

          <br />
          <p>
            Authors:
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Eric Benhamou,
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Jamal Atif,
            </ExternalLink> 
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Rida Laraki,
            </ExternalLink>
          </p>
          <br />

          <p>
            <ReactReadMoreReadLess
              charLimit={300}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
            >
            Abstract: In recent years, state-of-the-art methods for supervised learning have exploited increasingly gradient boosting techniques, with mainstream efficient implementations such as xgboost or lightgbm. One of the key points in generating proficient methods is Feature Selection (FS). It consists in selecting the right valuable effective features. When facing hundreds of these features, it becomes critical to select best features. While filter and wrappers methods have come to some maturity, embedded methods are truly necessary to find the best features set as they are hybrid methods combining features filtering and wrapping. In this work, we tackle the problem of finding through machine learning best a priori trades from an algorithmic strategy. We derive this new method using coordinate ascent optimization and using block variables. We compare our method to Recursive Feature Elimination (RFE) and Binary Coordinate Ascent (BCA). We show on a real life example the capacity of this method to select good trades a priori. Not only this method outperforms the initial trading strategy as it avoids taking loosing trades, it also surpasses other method, having the smallest feature set and the highest score at the same time. The interest of this method goes beyond this simple trade classification problem as it is a very general method to determine the optimal feature set using some information about features relationship as well as using coordinate ascent optimization.
            </ReactReadMoreReadLess>
          </p>
          <br />
          <p>Submitted: December, 2018</p>
        </Paper>
        <Paper>
          <h3>
          Feature selection with optimal coordinate ascent (OCA)
          </h3>
          <p>
            <ExternalLink href={"https://arxiv.org/pdf/1811.12064.pdf"} target="_blank">
                arXiv:1811.12064 
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/pdf/1811.12064.pdf"} target="_blank">
                [pdf]
            </ExternalLink> 
          </p>

          <br />
          <p>
            Authors:
            <ExternalLink href={"rhttps://arxiv.org/search/cs?searchtype=author&query=Saltiel%2C+D"} target="_blank">
                David Saltiel,
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Eric Benhamou,
            </ExternalLink>
          </p>
          <br />

          <p>
            <ReactReadMoreReadLess
              charLimit={300}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
            >
            Abstract: In machine learning, Feature Selection (FS) is a major part of efficient algorithm. It fuels the algorithm and is the starting block for our prediction. In this paper, we present a new method, called Optimal Coordinate Ascent (OCA) that allows us selecting features among block and individual features. OCA relies on coordinate ascent to find an optimal solution for gradient boosting methods score (number of correctly classified samples). OCA takes into account the notion of dependencies between variables forming blocks in our optimization. The coordinate ascent optimization solves the issue of the NP hard original problem where the number of combinations rapidly explode making a grid search unfeasible. It reduces considerably the number of iterations changing this NP hard problem into a polynomial search one. OCA brings substantial differences and improvements compared to previous coordinate ascent feature selection method: we group variables into block and individual variables instead of a binary selection. Our initial guess is based on the k-best group variables making our initial point more robust. We also introduced new stopping criteria making our optimization faster. We compare these two methods on our data set. We found that our method outperforms the initial one. We also compare our method to the Recursive Feature Elimination (RFE) method and find that OCA leads to the minimum feature set with the highest score. This is a nice byproduct of our method as it provides empirically the most compact data set with optimal performance.
            </ReactReadMoreReadLess>
          </p>
          <br />
          <p>Submitted: December, 2018</p>
        </Paper>
        <Paper>
          <h3>
          Kalman filter demystified: from intuition to probabilistic graphical model to real case in financial markets
          </h3>
          <p>
            <ExternalLink href={"https://arxiv.org/abs/1811.11618"} target="_blank">
                arXiv:1811.11618
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/abs/1811.11618"} target="_blank">
                [pdf]
            </ExternalLink> 
          </p>

          <br />
          <p>
            Authors:
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Eric Benhamou,
            </ExternalLink>
          </p>
          <br />

          <p>
            <ReactReadMoreReadLess
              charLimit={300}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
            >
            Abstract: In this paper, we revisit the Kalman filter theory. After giving the intuition on a simplified financial markets example, we revisit the maths underlying it. We then show that Kalman filter can be presented in a very different fashion using graphical models. This enables us to establish the connection between Kalman filter and Hidden Markov Models. We then look at their application in financial markets and provide various intuitions in terms of their applicability for complex systems such as financial markets. Although this paper has been written more like a self contained work connecting Kalman filter to Hidden Markov Models and hence revisiting well known and establish results, it contains new results and brings additional contributions to the field. First, leveraging on the link between Kalman filter and HMM, it gives new algorithms for inference for extended Kalman filters. Second, it presents an alternative to the traditional estimation of parameters using EM algorithm thanks to the usage of CMA-ES optimization. Third, it examines the application of Kalman filter and its Hidden Markov models version to financial markets, providing various dynamics assumptions and tests. We conclude by connecting Kalman filter approach to trend following technical analysis system and showing their superior performances for trend following detection.
            </ReactReadMoreReadLess>
          </p>
          <br />
          <p>Submitted: December, 2018</p>
        </Paper>
        <Paper>
          <h3>
          Three remarkable properties of the Normal distribution
          </h3>
          <p>
            <ExternalLink href={"https://arxiv.org/abs/1810.01768"} target="_blank">
                arXiv:1810.01768
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/abs/1810.01768"} target="_blank">
                [pdf]
            </ExternalLink> 
          </p>

          <br />
          <p>
            Authors:
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Eric Benhamou,
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/search/?query=beatrice+guez&searchtype=all&source=header"} target="_blank">
                Beatrice Guez,
            </ExternalLink> 
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Paris1%2C+N"} target="_blank">
                Nicolas Paris
            </ExternalLink> 
          </p>
          <br />

          <p>
            <ReactReadMoreReadLess
              charLimit={300}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
            >
            Abstract: In this paper, we present three remarkable properties of the normal distribution: first that if two independent variables's sum is normally distributed, then each random variable follows a normal distribution (which is referred to as the Levy Cramer theorem), second a variation of the Levy Cramer theorem that states that if two independent symmetric random variables with finite variance have their sum and their difference independent, then each random variable follows a standard normal distribution, and third that the normal distribution is characterized by the fact that it is the only distribution for which the sample mean and variance are independent (which is a central property for deriving the Student distribution and referred as the Geary theorem). The novelty of this paper is to provide new, quicker or self contained proofs of theses theorems.
            </ReactReadMoreReadLess>
          </p>
          <br />
          <p>Submitted: October, 2018</p>
        </Paper>
        <Paper>
          <h3>
          Gram Charlier and Edgeworth expansion for sample variance
          </h3>
          <p>
            <ExternalLink href={"https://arxiv.org/abs/1809.06668"} target="_blank">
                arXiv:1809.06668 
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/abs/1809.06668"} target="_blank">
                [pdf]
            </ExternalLink> 
          </p>

          <br />
          <p>
            Authors:
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Eric Benhamou,
            </ExternalLink>
          </p>
          <br />

          <p>
            <ReactReadMoreReadLess
              charLimit={300}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
            >
            Abstract: In this paper, we derive a valid Edgeworth expansions for the Bessel corrected empirical variance when data are generated by a strongly mixing process whose distribution can be arbitrarily. The constraint of strongly mixing process makes the problem not easy. Indeed, even for a strongly mixing normal process, the distribution is unknown. Here, we do not assume any other assumption than a sufficiently fast decrease of the underlying distribution to make the Edgeworth expansion convergent. This results can obviously apply to strongly mixing normal process and provide an alternative to the work of Moschopoulos (1985) and Mathai (1982).
            </ReactReadMoreReadLess>
          </p>
          <br />
          <p>Submitted: October, 2018</p>
        </Paper>
        <Paper>
          <h3>
          T-statistic for Autoregressive process
          </h3>
          <p>
            <ExternalLink href={"https://arxiv.org/abs/1809.04018"} target="_blank">
                arXiv:1809.04018
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/abs/1809.04018"} target="_blank">
                [pdf]
            </ExternalLink> 
          </p>

          <br />
          <p>
            Authors:
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Eric Benhamou,
            </ExternalLink>

          </p>
          <br />

          <p>
            <ReactReadMoreReadLess
              charLimit={300}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
            >
            Abstract: In this paper, we discuss the distribution of the t-statistic under the assumption of normal autoregressive distribution for the underlying discrete time process. This result generalizes the classical result of the traditional t-distribution where the underlying discrete time process follows an uncorrelated normal distribution. However, for AR(1), the underlying process is correlated. All traditional results break down and the resulting t-statistic is a new distribution that converges asymptotically to a normal. We give an explicit formula for this new distribution obtained as the ratio of two dependent distribution (a normal and the distribution of the norm of another independent normal distribution). We also provide a modified statistic that follows a non central t-distribution. Its derivation comes from finding an orthogonal basis for the the initial circulant Toeplitz covariance matrix. Our findings are consistent with the asymptotic distribution for the t-statistic derived for the asympotic case of large number of observations or zero correlation. This exact finding of this distribution has applications in multiple fields and in particular provides a way to derive the exact distribution of the Sharpe ratio under normal AR(1) assumptions.
            </ReactReadMoreReadLess>
          </p>
          <br />
          <p>Submitted: September, 2018</p>
        </Paper>
        <Paper>
          <h3>
          A few properties of sample variance
          </h3>
          <p>
            <ExternalLink href={"https://arxiv.org/abs/1809.03774"} target="_blank">
                arXiv:1809.03774
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/abs/1809.03774"} target="_blank">
                [pdf]
            </ExternalLink> 
          </p>

          <br />
          <p>
            Authors:
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Eric Benhamou,
            </ExternalLink> 
          </p>
          <br />

          <p>
            <ReactReadMoreReadLess
              charLimit={300}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
            >
            Abstract: A basic result is that the sample variance for i.i.d. observations is an unbiased estimator of the variance of the underlying distribution (see for instance Casella and Berger (2002)). But what happens if the observations are neither independent nor identically distributed. What can we say? Can we in particular compute explicitly the first two moments of the sample mean and hence generalize formulae provided in Tukey (1957a), Tukey (1957b) for the first two moments of the sample variance? We also know that the sample mean and variance are independent if they are computed on an i.i.d. normal distribution. This is one of the underlying assumption to derive the Student distribution Student alias W. S. Gosset (1908). But does this result hold for any other underlying distribution? Can we still have independent sample mean and variance if the distribution is not normal? This paper precisely answers these questions and extends previous work of Cho, Cho, and Eltinge (2004). We are able to derive a general formula for the first two moments and variance of the sample variance under no specific assumption. We also provide a faster proof of a seminal result of Lukacs (1942) by using the log characteristic function of the unbiased sample variance estimator.
            </ReactReadMoreReadLess>
          </p>
          <br />
          <p>September, 2018</p>
        </Paper>
        <Paper>
          <h3>
          Incremental Sharpe and other performance ratios
          </h3>
          <p>
            <ExternalLink href={"https://arxiv.org/abs/1807.09864"} target="_blank">
                arXiv:1807.09864
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/abs/1807.09864"} target="_blank">
                [pdf]
            </ExternalLink> 
          </p>
          <br />
          <p>
            Authors:
            <ExternalLink href={"https://arxiv.org/search/?searchtype=author&query=Benhamou%2C+E"} target="_blank">
                Eric Benhamou,
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/search/?query=beatrice+guez&searchtype=all&source=header"} target="_blank">
                Beatrice Guez,
            </ExternalLink> 
          </p>
          <br />
          <p>
            <ReactReadMoreReadLess
              charLimit={300}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
            >
            Abstract: We present a new methodology of computing incremental contribution for performance ratios for portfolio like Sharpe, Treynor, Calmar or Sterling ratios. Using Euler's homogeneous function theorem, we are able to decompose these performance ratios as a linear combination of individual modified performance ratios. This allows understanding the drivers of these performance ratios as well as deriving a condition for a new asset to provide incremental performance for the portfolio. We provide various numerical examples of this performance ratio decomposition.
            </ReactReadMoreReadLess>
          </p>
          <br />
          <p>Submitted: September, 2018</p>
        </Paper>
        <Paper>
          <h3>
          Connecting Sharpe ratio and Student t-statistic, and beyond
          </h3>
          <p>
            <ExternalLink href={"https://arxiv.org/abs/1808.04233"} target="_blank">
                arXiv:1808.04233
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/abs/1808.04233"} target="_blank">
                [pdf]
            </ExternalLink> 
          </p>
          <p>
            <ReactReadMoreReadLess
              charLimit={300}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
            >
            Abstract: Sharpe ratio is widely used in asset management to compare and benchmark funds and asset managers. It computes the ratio of the excess return over the strategy standard deviation. However, the elements to compute the Sharpe ratio, namely, the expected returns and the volatilities are unknown numbers and need to be estimated statistically. This means that the Sharpe ratio used by funds is subject to be error prone because of statistical estimation error. Lo (2002), Mertens (2002) derive explicit expressions for the statistical distribution of the Sharpe ratio using standard asymptotic theory under several sets of assumptions (independent normally distributed - and identically distributed returns). In this paper, we provide the exact distribution of the Sharpe ratio for independent normally distributed return. In this case, the Sharpe ratio statistic is up to a rescaling factor a non centered Student distribution whose characteristics have been widely studied by statisticians. The asymptotic behavior of our distribution provide the result of Lo (2002). We also illustrate the fact that the empirical Sharpe ratio is asymptotically optimal in the sense that it achieves the Cramer Rao bound. We then study the empirical SR under AR(1) assumptions and investigate the effect of compounding period on the Sharpe (computing the annual Sharpe with monthly data for instance). We finally provide general formula in this case of heteroscedasticity and autocorrelation.
            </ReactReadMoreReadLess>
          </p>
          <br />
          <p>Submitted: August, 2018</p>
        </Paper>
        <Paper>
          <h3>
          Seven proofs of the Pearson Chi-squared independence test and its graphical interpretation
          </h3>
          <p>
            <ExternalLink href={"https://arxiv.org/abs/1808.09171"} target="_blank">
                arXiv:1808.09171
            </ExternalLink>
            <ExternalLink href={"https://arxiv.org/abs/1808.09171"} target="_blank">
                [pdf]
            </ExternalLink> 
          </p>
          <p>
            <ReactReadMoreReadLess
              charLimit={300}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
            >
            Abstract:: This paper revisits the Pearson Chi-squared independence test. After presenting the underlying theory with modern notations and showing new way of deriving the proof, we describe an innovative and intuitive graphical presentation of this test. This enables not only interpreting visually the test but also measuring how close or far we are from accepting or rejecting the null hypothesis of non independence.
            </ReactReadMoreReadLess>
          </p>
          <br />
          <p>Submitted: August, 2018</p>
        </Paper>
      </ContentWrapper>
    </TextContainer>
  )
}

export default TextRd

const TextContainer = styled.div`
  wdith: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem calc((100vw - 1300px) / 2);
`

const TopLine = styled.p`
  color: #077bf1;
  font-size: 2.5rem;
  align: center;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem 2rem;
  grid-gap: 2rem;
`

const Paper = styled.div`
  padding-right: 2rem;
  margin: 1.5rem 0;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.5rem;
    color: #3b3b3b;
    line-height: 2rem;
  }

  ul {
    padding: 0 1.5rem;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  li {
    font-size: 1.5rem;
    color: #3b3b3b;
    line-height: 2rem;
  }
`
const ExternalLink = styled.a `
    text-decorations:none; 
    color:inherit;
`